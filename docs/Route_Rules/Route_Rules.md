# Route Rules & Organization

## Architecture Overview

```
Modules/{Module}/routes/
├── api.php                    ← Main API entry (requires versioned files)
│   └── api/Customer/v1.php    ← Versioned API route definitions
├── dashboard.php              ← Dashboard routes (single file)
└── web.php                    ← Public web routes
```

Each module's `RouteServiceProvider` maps three route types:

```php
public function map(): void
{
    $this->mapApiRoutes();        // prefix: api, middleware: api
    $this->mapWebRoutes();        // middleware: web
    $this->mapDashboardRoutes();  // middleware: web
}
```

---

## API Route Rules

### Rule 1: File Organization

Main `api.php` only requires versioned files:

```php
// Modules/{Module}/routes/api.php
require __DIR__ . '/api/Customer/v1.php';
```

Actual routes go in versioned files:

```
routes/api/Customer/v1.php     ← Customer-facing API
routes/api/Tenant/v1.php       ← Tenant-specific API (if needed)
```

### Rule 2: Use Route::group with prefix + as

```php
Route::middleware(['auth:sanctum'])->prefix('v1/customer')->group(function () {

    // ==================== WALLET ====================
    Route::group(['prefix' => 'wallet', 'as' => 'wallets.'], function () {
        Route::get('/', [WalletController::class, 'show'])->name('show');
        Route::get('/balance', [WalletController::class, 'balance'])->name('balance');
    });

    // ==================== TRANSACTIONS ====================
    Route::group(['prefix' => 'wallet/transactions', 'as' => 'wallets.transactions.'], function () {
        Route::get('/', [WalletController::class, 'transactions'])->name('index');
    });

    // ==================== OPERATIONS ====================
    Route::group(['prefix' => 'wallet', 'as' => 'wallets.'], function () {
        Route::post('/top-up', [WalletController::class, 'topUp'])->name('top-up');
        Route::post('/pay', [WalletController::class, 'pay'])->name('pay');
        Route::post('/transfer', [WalletController::class, 'transfer'])->name('transfer');
    });
});
```

### Rule 3: Version Prefix

All API routes must use `v1` prefix:

```
✅ /api/v1/customer/wallet
✅ /api/v1/products
✅ /api/v1/menus

❌ /api/customer/wallet
❌ /api/wallet/v1
```

### Rule 4: Middleware

| Type | Middleware |
|------|-----------|
| Public routes | No middleware (inside `prefix('v1')` group only) |
| Protected routes | `auth:sanctum` |

```php
// Public (no auth)
Route::prefix('v1')->group(function () {
    Route::get('products', [ProductController::class, 'index']);
});

// Protected (auth required)
Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::get('customer/orders', [OrderController::class, 'index']);
});
```

### Rule 5: Naming Convention

Pattern: `{module}.{resource}.{action}`

```
api.wallets.show
api.wallets.balance
api.wallets.transactions.index
api.wallets.top-up
api.wallets.pay
api.order.customer.orders
api.order.customer.cart.store
api.product.public.index
api.customer.auth.login
```

### Rule 6: Separate Public vs Protected

```php
// ==================== PUBLIC ====================
Route::prefix('v1')->group(function () {
    Route::get('products', [ProductController::class, 'index'])->name('product.public.index');
    Route::get('products/{identifier}', [ProductController::class, 'show'])->name('product.public.show');
});

// ==================== PROTECTED ====================
Route::middleware(['auth:sanctum'])->prefix('v1/customer')->group(function () {
    Route::group(['prefix' => 'orders', 'as' => 'order.customer.orders.'], function () {
        Route::get('/', [OrderController::class, 'index'])->name('index');
        Route::post('/', [OrderController::class, 'store'])->name('store');
        Route::get('/{order}', [OrderController::class, 'show'])->name('show');
        Route::post('/{order}/cancel', [OrderController::class, 'cancel'])->name('cancel');
    });
});
```

---

## Dashboard Route Rules

### Rule 1: Middleware Stack

All dashboard routes use this middleware:

```php
Route::middleware(['auth', 'verified', 'auto.permission'])
    ->prefix('dashboard')
    ->name('{module}.')
    ->group(function () {
        // ...
    });
```

| Middleware | Purpose |
|-----------|---------|
| `auth` | User must be logged in |
| `verified` | Email must be verified |
| `auto.permission` | Auto-resolves permission from route name |

### Rule 2: Route Order (CRITICAL)

Non-parameterized routes **MUST** come before parameterized routes:

```php
// 1. Trash, Import, Export, Bulk (BEFORE resource)
Route::get('orders/trash', [OrderController::class, 'trash'])->name('orders.trash');
Route::get('orders/export', [OrderController::class, 'export'])->name('orders.export');
Route::get('orders/import', [OrderController::class, 'import'])->name('orders.import');
Route::get('orders/bulk-delete', [OrderController::class, 'confirmBulkDelete'])->name('orders.bulk-delete.confirm');
Route::delete('orders/bulk-delete', [OrderController::class, 'bulkDelete'])->name('orders.bulk-delete');

// 2. Resource routes (CRUD)
Route::resource('orders', OrderController::class)->names('orders');

// 3. Custom actions on specific resource (AFTER resource)
Route::get('orders/{order}/delete', [OrderController::class, 'confirmDelete'])->name('orders.confirm-delete');
Route::put('orders/{order}/toggle-status', [OrderStatusController::class, 'toggle'])->name('orders.toggle-status');
Route::put('orders/{uuid}/restore', [OrderController::class, 'restore'])->name('orders.restore');
Route::delete('orders/{uuid}/force-delete', [OrderController::class, 'forceDelete'])->name('orders.force-delete');
```

### Rule 3: Resource Routes

Use `Route::resource()` for standard CRUD:

```php
Route::resource('orders', OrderController::class)->names('orders');
// Generates: orders.index, orders.create, orders.store, orders.show, orders.edit, orders.update, orders.destroy
```

### Rule 4: Status Actions

Separate controller for status changes:

```php
// Invokable controller for toggle
Route::put('orders/{order}/toggle-status', OrderStatusController::class)->name('orders.toggle-status');

// Or specific status actions
Route::patch('wallets/{wallet}/activate', [WalletController::class, 'activate'])->name('wallets.activate');
Route::patch('wallets/{wallet}/deactivate', [WalletController::class, 'deactivate'])->name('wallets.deactivate');
Route::patch('wallets/{wallet}/suspend', [WalletController::class, 'suspend'])->name('wallets.suspend');
```

### Rule 5: Nested Resources

Use `Route::group` for nested relationships:

```php
// Transactions under wallet
Route::prefix('wallets/{wallet}/transactions')->name('wallets.transactions.')->group(function () {
    Route::get('/', [TransactionController::class, 'index'])->name('index');
    Route::get('/{transaction}', [TransactionController::class, 'show'])->name('show');
    Route::get('/deposit/create', [TransactionController::class, 'createDeposit'])->name('deposit.create');
    Route::post('/deposit', [TransactionController::class, 'deposit'])->name('deposit');
    Route::post('/{transaction}/reverse', [TransactionController::class, 'reverse'])->name('reverse');
    Route::post('/{transaction}/cancel', [TransactionController::class, 'cancel'])->name('cancel');
});
```

### Rule 6: Bulk Operations Pattern

```php
// Bulk delete
Route::get('{resource}/bulk-delete', [Controller::class, 'confirmBulkDelete'])->name('{resource}.bulk-delete.confirm');
Route::delete('{resource}/bulk-delete', [Controller::class, 'bulkDelete'])->name('{resource}.bulk-delete');

// Trash operations
Route::get('{resource}/trash', [Controller::class, 'trash'])->name('{resource}.trash');
Route::put('{resource}/trash/bulk-restore', [Controller::class, 'bulkRestore'])->name('{resource}.bulk-restore');
Route::delete('{resource}/trash/bulk-force-delete', [Controller::class, 'bulkForceDelete'])->name('{resource}.bulk-force-delete');
Route::delete('{resource}/trash/empty', [Controller::class, 'emptyTrash'])->name('{resource}.empty-trash');

// Import/Export
Route::get('{resource}/export', [Controller::class, 'export'])->name('{resource}.export');
Route::get('{resource}/import', [Controller::class, 'import'])->name('{resource}.import');
Route::post('{resource}/import/preview', [Controller::class, 'previewImport'])->name('{resource}.import.preview');
Route::post('{resource}/import/process', [Controller::class, 'processImport'])->name('{resource}.import.process');
Route::get('{resource}/import/template', [Controller::class, 'template'])->name('{resource}.import.template');
```

### Rule 7: Naming Convention

Pattern: `{module}.{resource}.{action}`

```
menu.menus.index
menu.menus.store
menu.menus.show
menu.menus.toggle-status
menu.menus.trash
menu.menus.bulk-delete
menu.categories.index
menu.categories.products.manage
menu.categories.products.sync
menu.categories.products.reorder
menu.categories.products.toggle-availability
wallets.index
wallets.transactions.index
wallets.transactions.deposit
wallets.transactions.reverse
```

### Rule 8: Route Model Binding

Models use `uuid` as route key:

```php
// Model
public function getRouteKeyName(): string
{
    return 'uuid';
}

// Routes use {model} parameter (resolved via uuid)
Route::get('orders/{order}', ...);     // order resolved by uuid
Route::get('menus/{menu}', ...);       // menu resolved by uuid

// Exception: restore/force-delete use explicit {uuid}
Route::put('{resource}/{uuid}/restore', ...);
Route::delete('{resource}/{uuid}/force-delete', ...);
```

---

## Module Naming Reference

| Module | Route Prefix | Name Prefix | API Name |
|--------|-------------|-------------|----------|
| Order | `dashboard/orders` | `order.` | `api.order.` |
| Menu | `dashboard/menus` | `menu.` | `api.menu.` |
| Product | `dashboard/products` | `product.` | `api.product.` |
| Customer | `dashboard/customers` | `customer.` | `api.customer.` |
| Wallets | `dashboard/wallets` | `wallets.` | `api.wallets.` |
| Outlet | `dashboard/outlets` | `outlet.` | `api.outlet.` |
| Employee | `dashboard/employees` | `employee.` | `api.employee.` |
| School | `dashboard/schools` | `school.` | `api.school.` |

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| Non-parameterized route after resource | Move trash/export/bulk routes BEFORE `Route::resource()` |
| Missing `auto.permission` on dashboard | Always include in middleware stack |
| Using `id` in URL for uuid model | Use model binding `{order}` which resolves via uuid |
| Flat route names without module prefix | Always prefix: `order.orders.index` not `orders.index` |
| API routes without version prefix | Always use `v1`: `/api/v1/products` |
| Mixed `Route::get/post` without grouping | Use `Route::group(['prefix' => ..., 'as' => ...])` |
