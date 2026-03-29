# Multi-Database Configuration

Laravel multi-database setup for the Universe project.

| Database         | Connection Name   | Purpose                |
| ---------------- | ----------------- | ---------------------- |
| `universe`       | `mysql` (default) | Core app data          |
| `e_commerce_app` | `ecommerce_app`   | E-commerce module data |

> **Important:** `--database=` takes the **connection name** (`ecommerce_app`), NOT the database name (`e_commerce_app`).

---

## 1. Environment Variables (`.env`)

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
```

## 2. Database Config (`config/database.php`)

The `ecommerce_app` connection is added under `connections`:

```php
'ecommerce_app' => [
    'driver' => 'mysql',
    'url' => env('DB_URL'),
    'host' => env('DB_ECOMMERCE_HOST', '127.0.0.1'),
    'port' => env('DB_ECOMMERCE_PORT', '3306'),
    'database' => env('DB_ECOMMERCE_DATABASE', 'e_commerce_app'),
    'username' => env('DB_ECOMMERCE_USERNAME', 'root'),
    'password' => env('DB_ECOMMERCE_PASSWORD', ''),
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => env('DB_CHARSET', 'utf8mb4'),
    'collation' => env('DB_COLLATION', 'utf8mb4_unicode_ci'),
    'prefix' => '',
    'prefix_indexes' => true,
    'strict' => true,
    'engine' => null,
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        (PHP_VERSION_ID >= 80500 ? \Pdo\Mysql::ATTR_SSL_CA : \PDO::MYSQL_ATTR_SSL_CA) => env('MYSQL_ATTR_SSL_CA'),
    ]) : [],
],
```

---

## 3. CLI Commands

### Create the database

```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS e_commerce_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

### Run migrations

```bash
# Default database (universe)
php artisan migrate

# E-commerce database
php artisan migrate --database=ecommerce_app

# Module-specific migrations on ecommerce_app
php artisan module:migrate Order --database=ecommerce_app

# Rollback on ecommerce_app
php artisan migrate:rollback --database=ecommerce_app

# Fresh migration on ecommerce_app
php artisan migrate:fresh --database=ecommerce_app

# Migration status
php artisan migrate:status --database=ecommerce_app
```

### Seeders

```bash
# Seed default database
php artisan db:seed

# Seed ecommerce_app database
php artisan db:seed --database=ecommerce_app

# Seed specific seeder on ecommerce_app
php artisan db:seed --class=OrderSeeder --database=ecommerce_app
```

### Generate module migration targeting ecommerce_app

```bash
php artisan module:make-migration create_orders_table Order
```

Then set `protected $connection = 'ecommerce_app';` in the generated migration file.

---

## 4. Usage in Models

```php
<?php

namespace Modules\Order\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $connection = 'ecommerce_app'; // uses e_commerce_app database
    protected $table = 'orders';
}
```

> Models **without** `$connection` default to `universe`.

---

## 5. Usage in Migrations

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $connection = 'ecommerce_app';

    public function up(): void
    {
        Schema::connection('ecommerce_app')->create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->foreignId('customer_id');
            $table->decimal('total', 10, 2);
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::connection('ecommerce_app')->dropIfExists('orders');
    }
};
```

---

## 6. Query Builder

```php
// Direct query on ecommerce_app
DB::connection('ecommerce_app')->table('orders')->get();

// Switch model connection at runtime
$order = (new Order)->setConnection('ecommerce_app')->find(1);

// Transaction on ecommerce_app
DB::connection('ecommerce_app')->transaction(function () {
    DB::connection('ecommerce_app')->table('orders')->insert([...]);
});
```

---

## 7. Cross-Database Joins

Both databases are on the same MySQL server, so cross-database joins work:

```php
DB::table('universe.users')
    ->join('e_commerce_app.orders', 'universe.users.id', '=', 'e_commerce_app.orders.customer_id')
    ->select('universe.users.name', 'e_commerce_app.orders.order_number')
    ->get();
```

---

## 8. Testing Connection

```bash
# Verify connection works
php artisan tinker
>>> DB::connection('ecommerce_app')->getPdo();

# Check current database
>>> DB::connection('ecommerce_app')->getDatabaseName();
# Output: "e_commerce_app"
```

---

## 9. All Commands That Support `--database`

```bash
php artisan migrate --database=ecommerce_app
php artisan migrate:rollback --database=ecommerce_app
php artisan migrate:fresh --database=ecommerce_app
php artisan migrate:reset --database=ecommerce_app
php artisan migrate:status --database=ecommerce_app
php artisan db:seed --database=ecommerce_app
php artisan db:wipe --database=ecommerce_app
```

### Module-specific

```bash
php artisan module:migrate Order --database=ecommerce_app
php artisan module:migrate-rollback Order --database=ecommerce_app
php artisan module:seed Order --database=ecommerce_app
```

### In code (e.g., a Seeder)

```php
public function run(): void
{
    DB::connection('ecommerce_app')->table('orders')->insert([
        'order_number' => 'ORD-001',
        'total' => 99.99,
    ]);
}
```

---

## Quick Reference

| Task                   | Command                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| Create DB              | `mysql -u root -e "CREATE DATABASE e_commerce_app ...;"`              |
| Migrate default        | `php artisan migrate`                                                 |
| Migrate ecommerce_app  | `php artisan migrate --database=ecommerce_app`                        |
| Migrate module         | `php artisan module:migrate Order --database=ecommerce_app`           |
| Rollback ecommerce_app | `php artisan migrate:rollback --database=ecommerce_app`               |
| Fresh ecommerce_app    | `php artisan migrate:fresh --database=ecommerce_app`                  |
| Seed ecommerce_app     | `php artisan db:seed --database=ecommerce_app`                        |
| Check status           | `php artisan migrate:status --database=ecommerce_app`                 |
| Test connection        | `php artisan tinker` then `DB::connection('ecommerce_app')->getPdo()` |

> **Remember:** `--database=ecommerce_app` (connection name) NOT `--database=e_commerce_app` (database name).

```bash
php artisan migrate:status                          # universe
php artisan migrate:status --database=ecommerce_app # ecommerce_app
```

---

## HasSwitchDatabase Trait

Reusable trait to dynamically switch database connections for any model via `.env`.

**Location:** `app/Traits/HasSwitchDatabase.php`

### How It Works

```
.env (ENVIRONMENT_DB_CONNECTION)
  → config/database.php (environment_connection)
    → HasSwitchDatabase trait (getConnectionName)
      → Model uses the configured database
```

### Setup

**1. Config** — already added in `config/database.php`:

```php
'environment_connection' => env('ENVIRONMENT_DB_CONNECTION', 'mysql'),
```

**2. `.env`** — set which database to use:

```env
# Use universe (default)
ENVIRONMENT_DB_CONNECTION=mysql

# Use e-commerce
ENVIRONMENT_DB_CONNECTION=ecommerce_app
```

**3. Add trait to any model:**

```php
use App\Traits\HasSwitchDatabase;

class Order extends Model
{
    use HasSwitchDatabase;
}

class Cart extends Model
{
    use HasSwitchDatabase;
}
```

### Switch Database

**Via `.env` (persistent):**

```env
ENVIRONMENT_DB_CONNECTION=ecommerce_app
```

Then clear config cache:

```bash
php artisan config:clear
```

**Via code (runtime only):**

```php
$order = new Order();
$order->switchDatabase('ecommerce_app');

// Or switch back
$order->switchDatabase('mysql');
```

### Available Connections

| `.env` Value      | Database         | Description     |
| ----------------- | ---------------- | --------------- |
| `mysql` (default) | `universe`       | Core app data   |
| `ecommerce_app`   | `e_commerce_app` | E-commerce data |

### Example: Order Module

```php
// app/Traits/HasSwitchDatabase.php (already created)
namespace App\Traits;

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

```php
// Modules/Order/app/Models/Order.php
namespace Modules\Order\Models;

use App\Traits\HasSwitchDatabase;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasSwitchDatabase;

    protected $table = 'order_orders';
}
```

### Which Models Should Use This Trait?

Add `use HasSwitchDatabase;` to any model whose table exists in **both** databases:

| Module | Models                                                                                                          |
| ------ | --------------------------------------------------------------------------------------------------------------- |
| Order  | Order, OrderItem, Cart, CartItem, OrderShipping, ProductReview, OutletReview, Refund, Transaction, ShippingZone |

> Models **without** the trait always use `universe` (default `mysql` connection).

### Quick Reference

| Action                  | How                                                                |
| ----------------------- | ------------------------------------------------------------------ |
| Switch to ecommerce     | Set `ENVIRONMENT_DB_CONNECTION=ecommerce_app` in `.env`            |
| Switch back to universe | Set `ENVIRONMENT_DB_CONNECTION=mysql` in `.env` or remove the line |
| Switch at runtime       | `$model->switchDatabase('ecommerce_app')`                          |
| Clear config cache      | `php artisan config:clear`                                         |
