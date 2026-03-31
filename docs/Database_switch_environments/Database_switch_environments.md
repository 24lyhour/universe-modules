# Database Switch Environments

## Rules

### Rule 1: Two Databases, Two Connections

| Connection Name   | Database         | Purpose           | `.env` Value    |
|-------------------|------------------|-------------------|-----------------|
| `mysql` (default) | `universe`       | Core app data     | `mysql`         |
| `ecommerce_app`   | `e_commerce_app` | E-commerce module | `ecommerce_app` |

> **CRITICAL:** `--database=` takes the **connection name** (`ecommerce_app`), NOT the database name (`e_commerce_app`).

### Rule 2: Use `HasSwitchDatabase` Trait for Switchable Models

Any model whose table exists in **both** databases must use `HasSwitchDatabase`. Do NOT hardcode `protected $connection`.

```php
use App\Traits\HasSwitchDatabase;

class Order extends Model
{
    use HasSwitchDatabase; // reads from config('database.environment_connection')
}
```

### Rule 3: Models Without the Trait Always Use Default

Models without `HasSwitchDatabase` always use `mysql` → `universe`. This is correct for: `User`, `Outlet`, `Customer`, `Product`, `Menu`, etc.

### Rule 4: Switch via `.env` (Persistent)

```env
ENVIRONMENT_DB_CONNECTION=mysql          # universe (default)
ENVIRONMENT_DB_CONNECTION=ecommerce_app  # e-commerce
```

Always clear cache after changing: `php artisan config:clear`

### Rule 5: Switch via Code (Runtime Only)

```php
$order = new Order();
$order->switchDatabase('ecommerce_app');  // affects ALL models with trait
$order->switchDatabase('mysql');          // switch back
```

> **Warning:** Runtime switching is global via `config()`. Resets on next request.

### Rule 6: Migrations Must Specify Connection

```php
return new class extends Migration
{
    protected $connection = 'ecommerce_app';

    public function up(): void
    {
        Schema::connection('ecommerce_app')->create('orders', function (Blueprint $table) {
            // ...
        });
    }

    public function down(): void
    {
        Schema::connection('ecommerce_app')->dropIfExists('orders');
    }
};
```

### Rule 7: Seeders Must Use Correct Connection

```php
DB::connection('ecommerce_app')->table('orders')->insert([...]);
```

### Rule 8: Cross-Database Joins Use Full Database Name

```php
DB::table('universe.users')
    ->join('e_commerce_app.orders', 'universe.users.id', '=', 'e_commerce_app.orders.customer_id')
    ->get();
```

---

## Architecture Flow

```
.env (ENVIRONMENT_DB_CONNECTION)
  → config/database.php (environment_connection)
    → HasSwitchDatabase trait (getConnectionName)
      → Model reads/writes from configured database
```

---

## Trait Implementation

**Location:** `app/Traits/HasSwitchDatabase.php`

```php
trait HasSwitchDatabase
{
    public function getConnectionName()
    {
        return config('database.environment_connection', 'mysql');
    }

    public function switchDatabase($database)
    {
        config(['database.environment_connection' => $database]);
    }
}
```

**Config:** `config/database.php`

```php
'environment_connection' => env('ENVIRONMENT_DB_CONNECTION', 'mysql'),
```

---

## Which Models Use This Trait?

| Module | Models                                                                                                          |
|--------|-----------------------------------------------------------------------------------------------------------------|
| Order  | Order, OrderItem, Cart, CartItem, OrderShipping, ProductReview, OutletReview, Refund, Transaction, ShippingZone |

---

## .env Setup

```env
# Default Database (Universe)
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=universe
DB_USERNAME=root
DB_PASSWORD=

# Secondary Database (E-Commerce)
DB_ECOMMERCE_HOST=127.0.0.1
DB_ECOMMERCE_PORT=3306
DB_ECOMMERCE_DATABASE=e_commerce_app
DB_ECOMMERCE_USERNAME=root
DB_ECOMMERCE_PASSWORD=

# Switch environment
ENVIRONMENT_DB_CONNECTION=mysql
```

---

## Common Mistakes

| Mistake                                          | Fix                                                    |
|--------------------------------------------------|--------------------------------------------------------|
| `--database=e_commerce_app`                      | Use connection name: `--database=ecommerce_app`        |
| Hardcoding `$connection = 'ecommerce_app'`       | Use `HasSwitchDatabase` trait instead                   |
| Forgetting `config:clear` after `.env` change    | Always run `php artisan config:clear`                   |
| Migration without `Schema::connection()`         | Always specify connection in secondary DB migrations    |
