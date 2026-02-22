# Multi-Tenancy System Documentation

This document explains the multi-tenancy architecture implemented in the Universe project using Laravel Global Query Scopes.

## Overview

The multi-tenancy system allows users to be assigned to specific tenants (Schools, Outlets, Companies). When a user belongs to a tenant, they only see data related to that tenant. Super-admins bypass all tenant filtering and see all data.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Request                             │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                   SetTenantContext Middleware                    │
│              (Sets TenantService from user's tenant)            │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        TenantService                             │
│    (Singleton that holds current tenant_type and tenant_id)     │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Eloquent Global Scopes                       │
│         (Traits automatically filter queries by tenant)         │
└─────────────────────────────────────────────────────────────────┘
```

## Database Schema

### Users Table

```php
Schema::table('users', function (Blueprint $table) {
    $table->string('tenant_type')->nullable();  // e.g., Modules\School\Models\School
    $table->unsignedBigInteger('tenant_id')->nullable();
});
```

### Tenant Models

Users can be assigned to these tenant types:

| Tenant Type | Model | Description |
|-------------|-------|-------------|
| School | `Modules\School\Models\School` | Educational institutions |
| Outlet | `Modules\Outlet\Models\Outlet` | Retail/service outlets |

These are the "root" tenant models that users can be assigned to via the User Management page.

### Assigning Tenants to Users

Navigate to **Settings > User Management > Edit User** to assign tenants:

1. Users can be assigned to **multiple tenants** (multi-tenancy)
2. One tenant must be marked as **Primary** (default for filtering)
3. Available tenant types:
   - **Schools** - Educational institutions (School icon)
   - **Outlets** - Retail/service outlets (Store icon)
4. **No Organization** - Global access (user sees all data based on permissions)

### Multi-Tenant Assignment

Users can access multiple organizations:

| Field | Description |
|-------|-------------|
| Primary Tenant | Main tenant used for data filtering (stored in `users.tenant_type/id`) |
| Additional Tenants | Stored in `user_tenants` table |

**Database Tables:**

```php
// users table - Primary tenant
Schema::table('users', function (Blueprint $table) {
    $table->string('tenant_type')->nullable();
    $table->unsignedBigInteger('tenant_id')->nullable();
});

// user_tenants table - All tenant access
Schema::create('user_tenants', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->string('tenant_type');
    $table->unsignedBigInteger('tenant_id');
    $table->string('role')->nullable();
    $table->boolean('is_primary')->default(false);
    $table->timestamps();
});
```

**User Model Methods:**

```php
// Check if user has access to specific tenant
$user->belongsToTenant('School', 5);

// Get all tenants user can access
$user->allTenants();

// Check if user has any tenant
$user->hasTenant();
```

### Child Models

Models can relate to tenants in different ways:
- **Direct**: Has `tenant_type` and `tenant_id` columns
- **Through parent**: Has `school_id`, `outlet_id`, `product_id`, etc.

---

## TenantService

**Location:** `app/Services/TenantService.php`

A singleton service that manages the current tenant context throughout the request lifecycle.

### Methods

| Method | Description |
|--------|-------------|
| `setFromUser($user)` | Set tenant from user's `tenant_type`/`tenant_id` |
| `setTenant($type, $id)` | Set tenant directly |
| `setFromModel($model)` | Set tenant from a model instance |
| `clear()` | Clear current tenant |
| `hasTenant()` | Check if tenant is set |
| `getTenantType()` | Get full tenant class name |
| `getShortTenantType()` | Get class basename (e.g., "School") |
| `getTenantId()` | Get tenant ID |
| `getTenant()` | Get tenant model instance |
| `getTenantName()` | Get tenant name for display |

### Usage Example

```php
use App\Services\TenantService;

// Get the service
$tenantService = app(TenantService::class);

// Check if user has tenant
if ($tenantService->hasTenant()) {
    $schoolId = $tenantService->getTenantId();
    $schoolName = $tenantService->getTenantName();
}
```

---

## Tenant Traits

### Quick Reference

| Trait | Use When | Column Required | Bypass Method |
|-------|----------|-----------------|---------------|
| `IsTenant` | Model IS a tenant (School, Outlet) | `id` | `allRecords()` |
| `BelongsToTenant` | Has `tenant_type`/`tenant_id` | `tenant_type`, `tenant_id` | `allTenants()` |
| `BelongsToSchool` | Has `school_id` | `school_id` | `allSchools()` |
| `BelongsToDepartment` | Has `department_id` | `department_id` | `allSchools()` |
| `BelongsToOutlet` | Has `outlet_id` | `outlet_id` | `allOutlets()` |
| `BelongsToProduct` | Has `product_id` (filters via product.outlet_id) | `product_id` | `allProducts()` |
| `BelongsToMenu` | Has `menu_id` (filters via menu.outlet_id) | `menu_id` | `allMenus()` |

---

### IsTenant

**Location:** `app/Traits/IsTenant.php`

For models that ARE tenants themselves (School, Company, Outlet).

When a user is assigned to a School tenant, querying `School::all()` returns only their assigned school.

```php
use App\Traits\IsTenant;

class School extends Model
{
    use IsTenant;
}
```

**Bypass filtering:**
```php
// Get all schools regardless of tenant
School::allRecords()->get();

// Get specific school
School::forTenantId(5)->first();
```

---

### BelongsToTenant

**Location:** `app/Traits/BelongsToTenant.php`

For models with `tenant_type` and `tenant_id` columns (polymorphic relationship).

```php
use App\Traits\BelongsToTenant;

class Product extends Model
{
    use BelongsToTenant;
}
```

**Features:**
- Auto-filters queries by current tenant
- Auto-sets `tenant_type`/`tenant_id` on create

**Bypass filtering:**
```php
// Get all products regardless of tenant
Product::allTenants()->get();

// Get products for specific tenant
Product::forTenant(School::class, 5)->get();
```

---

### BelongsToSchool

**Location:** `app/Traits/BelongsToSchool.php`

For models with `school_id` column.

```php
use App\Traits\BelongsToSchool;

class Employee extends Model
{
    use BelongsToSchool;
}
```

**Features:**
- Only applies when user's tenant is a School
- Auto-sets `school_id` on create

**Bypass filtering:**
```php
// Get all employees regardless of school
Employee::allSchools()->get();

// Get employees for specific school
Employee::forSchool(5)->get();
```

---

### BelongsToDepartment

**Location:** `app/Traits/BelongsToDepartment.php`

For models with `department_id` that filter through department's `school_id`.

```php
use App\Traits\BelongsToDepartment;

class Classroom extends Model
{
    use BelongsToDepartment;

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
```

**Bypass filtering:**
```php
Classroom::allSchools()->get();
```

---

### BelongsToOutlet

**Location:** `app/Traits/BelongsToOutlet.php`

For models with `outlet_id` column. Filters by `outlet_id` when user is assigned to an Outlet.

```php
use App\Traits\BelongsToOutlet;

class Customer extends Model
{
    use BelongsToOutlet;

    public function outlet()
    {
        return $this->belongsTo(Outlet::class);
    }
}
```

**Bypass filtering:**
```php
// Get all customers regardless of outlet
Customer::allOutlets()->get();

// Get customers for specific outlet
Customer::forOutlet(5)->get();
```

---

### BelongsToProduct

**Location:** `app/Traits/BelongsToProduct.php`

For models with `product_id`. Filters through product's `outlet_id` when user is assigned to an Outlet.

```php
use App\Traits\BelongsToProduct;

class ProductVariant extends Model
{
    use BelongsToProduct;

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
```

**Bypass filtering:**
```php
// Get all variants regardless of outlet
ProductVariant::allProducts()->get();

// Get variants for specific outlet
ProductVariant::forOutlet(5)->get();
```

---

### BelongsToMenu

**Location:** `app/Traits/BelongsToMenu.php`

For models with `menu_id`. Filters through menu's `outlet_id` when user is assigned to an Outlet.

```php
use App\Traits\BelongsToMenu;

class Category extends Model
{
    use BelongsToMenu;

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}
```

**Bypass filtering:**
```php
// Get all categories regardless of outlet
Category::allMenus()->get();

// Get categories for specific outlet
Category::forOutlet(5)->get();
```

---

## Trait Hierarchy (Outlet)

When user is assigned to an **Outlet**, filtering works through these relationships:

```
Outlet (IsTenant)
├── Menu (BelongsToOutlet) → filters by outlet_id
│   └── Category (BelongsToMenu) → filters via menu.outlet_id
├── Product (BelongsToOutlet) → filters by outlet_id
│   ├── ProductVariant (BelongsToProduct) → filters via product.outlet_id
│   ├── ProductAddOn (BelongsToProduct) → filters via product.outlet_id
│   └── ProductUpsell (BelongsToProduct) → filters via product.outlet_id
├── Customer (BelongsToOutlet) → filters by outlet_id
└── TypeOutlet (BelongsToOutlet) → filters by outlet_id
```

---

## Module Usage

### Models Using Each Trait

| Module | Model | Trait |
|--------|-------|-------|
| School | School | `IsTenant` |
| School | Department | `BelongsToSchool` |
| School | Classroom | `BelongsToDepartment` |
| School | Program | `BelongsToSchool` |
| Employee | Employee | `BelongsToSchool` |
| Employee | EmployeeType | `BelongsToSchool` |
| Employee | Attendance | `BelongsToSchool` |
| Outlet | Outlet | `IsTenant` |
| Outlet | TypeOutlet | `BelongsToOutlet` |
| Menu | Menu | `BelongsToOutlet` |
| Menu | MenuType | `BelongsToOutlet` |
| Menu | Category | `BelongsToMenu` |
| Product | Product | `BelongsToOutlet` |
| Product | ProductVariant | `BelongsToProduct` |
| Product | ProductAddOn | `BelongsToProduct` |
| Product | ProductUpsell | `BelongsToProduct` |
| Customer | Customer | `BelongsToOutlet` |

---

## Super-Admin Bypass

Super-admins should ALWAYS see all data. In controllers, check for super-admin role before applying tenant filtering:

```php
public function getStats(): array
{
    $user = Auth::user();
    $isSuperAdmin = $user && $user->hasRole('super-admin');

    if ($isSuperAdmin) {
        // Use bypass methods for super-admin
        return [
            'total' => School::allRecords()->count(),
            'employees' => Employee::allSchools()->count(),
            'products' => Product::allTenants()->count(),
        ];
    }

    // Regular users - auto-filtered by trait
    return [
        'total' => School::count(),
        'employees' => Employee::count(),
        'products' => Product::count(),
    ];
}
```

---

## Dashboard Permissions

Dashboard tabs are controlled by module-specific permissions.

### Available Permissions

| Permission | Controls |
|------------|----------|
| `dashboard.view` | Access to dashboard route |
| `dashboard.customer` | Customer tab visibility |
| `dashboard.menu` | Menu tab visibility |
| `dashboard.outlet` | Outlet tab visibility |
| `dashboard.product` | Product tab visibility |
| `dashboard.order` | Order tab visibility |
| `dashboard.wallets` | Wallets tab visibility |
| `dashboard.employee` | Employee tab visibility |
| `dashboard.school` | School tab visibility |

### Assigning Permissions

In the role editor, these appear under the **Dashboard** section:
- **dashboard** resource: `view`, `view_analytics`, `export_reports`
- **dashboard_widgets** resource: `Customer`, `Menu`, `Outlet`, `Product`, `Order`, `Wallets`, `Employee`, `School`

Assign individual permissions to control which tabs each role can see.

### Widget Settings Permissions

To manage dashboard widgets at `/dashboard/settings`, users need:

| Permission | Required For |
|------------|--------------|
| `settings.view_any` | Access widget settings page |
| `settings.toggle` | Toggle module widgets on/off |
| `settings.order` | Change widget display order |
| `settings.update` | Update individual widgets |
| `dashboard.{module}` | See/modify specific module widgets |

**Example:** To manage Employee widgets, user needs:
- `settings.view_any` + `settings.toggle` + `dashboard.employee`

---

## Adding Tenant Support to a New Model

### Step 1: Choose the Right Trait

- Model IS a tenant → `IsTenant`
- Has `tenant_type`/`tenant_id` columns → `BelongsToTenant`
- Has `school_id` column → `BelongsToSchool`
- Has `department_id` column → `BelongsToDepartment`
- Has `outlet_id` column → `BelongsToOutlet`
- Has `product_id` column → `BelongsToProduct`
- Has `menu_id` column → `BelongsToMenu`

### Step 2: Add the Trait

```php
<?php

namespace Modules\YourModule\Models;

use App\Traits\BelongsToSchool;
use Illuminate\Database\Eloquent\Model;

class YourModel extends Model
{
    use BelongsToSchool;

    // ...
}
```

### Step 3: Ensure Required Relationship (if needed)

For traits that filter through parent (BelongsToOutlet, BelongsToProduct, etc.):

```php
public function outlet()
{
    return $this->belongsTo(\Modules\Outlet\Models\Outlet::class);
}
```

### Step 4: Update Controllers for Super-Admin

```php
// In controller methods
if ($user->hasRole('super-admin')) {
    $items = YourModel::allSchools()->get();  // or allTenants()
} else {
    $items = YourModel::all();  // Auto-filtered
}
```

---

## Common Issues

### Data Not Showing

1. Check if user has tenant assigned (`user.tenant_type`, `user.tenant_id`)
2. Verify the model uses the correct trait
3. For relational traits, ensure the parent relationship method exists
4. Check if super-admin bypass is implemented in controller

### Too Much Data Showing

1. Verify `SetTenantContext` middleware is applied
2. Check `TenantService` is being set correctly
3. Ensure trait is booted (no syntax errors)

### 403 Permission Errors

1. Check `AutoPermission` middleware special routes mapping
2. Verify role has required `dashboard.view` permission
3. Check module-specific dashboard permissions

---

## Files Reference

| File | Purpose |
|------|---------|
| `app/Services/TenantService.php` | Tenant context management |
| `app/Http/Middleware/SetTenantContext.php` | Set tenant on request |
| `app/Http/Middleware/AutoPermission.php` | Auto permission resolution |
| `app/Http/Controllers/Settings/UserRoleController.php` | User tenant assignment |
| `app/Http/Controllers/Settings/WidgetController.php` | Widget settings (filtered by permissions) |
| `app/Traits/IsTenant.php` | For tenant models |
| `app/Traits/BelongsToTenant.php` | For polymorphic tenant relation |
| `app/Traits/BelongsToSchool.php` | For `school_id` column |
| `app/Traits/BelongsToDepartment.php` | For `department_id` column |
| `app/Traits/BelongsToOutlet.php` | For `outlet_id` column |
| `app/Traits/BelongsToProduct.php` | For `product_id` column |
| `app/Traits/BelongsToMenu.php` | For `menu_id` column |
| `resources/js/pages/dashboard/settings/users/Edit.vue` | User edit with tenant dropdown |
