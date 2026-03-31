# Database Switch Environments - CLI Commands

## Create Database

```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS e_commerce_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

---

## Migrations

### Default Database (universe)

```bash
php artisan migrate
php artisan migrate:rollback
php artisan migrate:fresh
php artisan migrate:fresh --seed
php artisan migrate:status
```

### E-Commerce Database (ecommerce_app)

```bash
php artisan migrate --database=ecommerce_app
php artisan migrate:rollback --database=ecommerce_app
php artisan migrate:fresh --database=ecommerce_app
php artisan migrate:fresh --database=ecommerce_app --seed
php artisan migrate:status --database=ecommerce_app
php artisan migrate:reset --database=ecommerce_app
```

### Module-Specific on E-Commerce

```bash
php artisan module:migrate Order --database=ecommerce_app
php artisan module:migrate-rollback Order --database=ecommerce_app
```

---

## Seeders

### Default Database

```bash
php artisan db:seed
php artisan db:seed --class=UserSeeder
```

### E-Commerce Database

```bash
php artisan db:seed --database=ecommerce_app
php artisan db:seed --class=OrderSeeder --database=ecommerce_app
```

### Module-Specific

```bash
php artisan module:seed Order --database=ecommerce_app
```

---

## Generate Migration for E-Commerce

```bash
# Create migration in module
php artisan module:make-migration create_orders_table Order
```

Then set connection in the generated file:

```php
protected $connection = 'ecommerce_app';

public function up(): void
{
    Schema::connection('ecommerce_app')->create('orders', function (Blueprint $table) {
        // ...
    });
}
```

---

## Switch Environment

### Via .env (Persistent)

```env
# Universe (default)
ENVIRONMENT_DB_CONNECTION=mysql

# E-Commerce
ENVIRONMENT_DB_CONNECTION=ecommerce_app
```

Then clear cache:

```bash
php artisan config:clear
```

### Via Tinker (Runtime)

```bash
php artisan tinker
>>> config(['database.environment_connection' => 'ecommerce_app']);
>>> \Modules\Order\Models\Order::count();
```

---

## Test Connection

```bash
php artisan tinker

# Test PDO connection
>>> DB::connection('ecommerce_app')->getPdo();

# Check database name
>>> DB::connection('ecommerce_app')->getDatabaseName();
# Output: "e_commerce_app"

# Query directly
>>> DB::connection('ecommerce_app')->table('order_orders')->count();
```

---

## Wipe Database

```bash
# Wipe default
php artisan db:wipe

# Wipe ecommerce
php artisan db:wipe --database=ecommerce_app
```

---

## All Commands Supporting `--database`

| Command                   | Example                                                              |
| ------------------------- | -------------------------------------------------------------------- |
| `migrate`                 | `php artisan migrate --database=ecommerce_app`                       |
| `migrate:rollback`        | `php artisan migrate:rollback --database=ecommerce_app`              |
| `migrate:fresh`           | `php artisan migrate:fresh --database=ecommerce_app`                 |
| `migrate:reset`           | `php artisan migrate:reset --database=ecommerce_app`                 |
| `migrate:status`          | `php artisan migrate:status --database=ecommerce_app`                |
| `db:seed`                 | `php artisan db:seed --database=ecommerce_app`                       |
| `db:wipe`                 | `php artisan db:wipe --database=ecommerce_app`                       |
| `module:migrate`          | `php artisan module:migrate Order --database=ecommerce_app`          |
| `module:migrate-rollback` | `php artisan module:migrate-rollback Order --database=ecommerce_app` |
| `module:seed`             | `php artisan module:seed Order --database=ecommerce_app`             |

---

## Quick Reference

| Task                 | Command                                                     |
| -------------------- | ----------------------------------------------------------- |
| Switch to e-commerce | `ENVIRONMENT_DB_CONNECTION=ecommerce_app` in `.env`         |
| Switch to universe   | `ENVIRONMENT_DB_CONNECTION=mysql` in `.env`                 |
| Clear config cache   | `php artisan config:clear`                                  |
| Migrate e-commerce   | `php artisan migrate --database=ecommerce_app`              |
| Seed e-commerce      | `php artisan db:seed --database=ecommerce_app`              |
| Module migrate       | `php artisan module:migrate Order --database=ecommerce_app` |
| Test connection      | `DB::connection('ecommerce_app')->getPdo()`                 |
| Check status         | `php artisan migrate:status --database=ecommerce_app`       |
