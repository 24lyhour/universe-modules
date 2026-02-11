# Movice Module

This module handles the "Movice" feature of the application.

## 📂 Structure

- **Model**: `Modules\Movice\App\Models\Movice`
- **Controller**: `Modules\Movice\App\Http\Controllers\MoviceController`
- **Database**:
    - Migration: `create_movices_table`
    - Factory: `MoviceFactory`
    - Seeder: `MoviceSeeder`

## 🚀 Usage

### Enabling/Disabling

```bash
php artisan module:enable Movice
php artisan module:disable Movice
```

### Running Migrations

The migration for this module is located in `Modules/Movice/database/migrations`.

```bash
php artisan migrate
```

### Routes

Routes are defined in:

- Web: `Modules/Movice/routes/web.php` (Prefix: `movice`)
- API: `Modules/Movice/routes/api.php`
