# Laravel Modules CLI Documentation

This document covers all CLI commands available for managing Laravel modules in the Universe project.

## Table of Contents

- [Module Management](#module-management)
- [Code Generation](#code-generation)
- [Database & Migrations](#database--migrations)
- [Publishing](#publishing)
- [Module-Specific Commands](#module-specific-commands)

---

## Available Modules

| Module | Status | Path |
|--------|--------|------|
| Blog | Enabled | Modules/Blog |
| Booking | Enabled | Modules/Booking |
| Company | Enabled | Modules/Company |
| Customer | Enabled | Modules/Customer |
| Hotel | Enabled | Modules/Hotel |
| Media | Enabled | Modules/Media |
| Menu | Enabled | Modules/Menu |
| Movice | Enabled | Modules/Movice |
| Order | Enabled | Modules/Order |
| Outlet | Enabled | Modules/Outlet |
| Payment | Enabled | Modules/Payment |
| Porfolio | Enabled | Modules/Porfolio |
| Product | Enabled | Modules/Product |
| Report | Enabled | Modules/Report |
| School | Enabled | Modules/School |
| Wallets | Enabled | Modules/Wallets |

---

## Module Management

### List Modules
```bash
php artisan module:list
```
Shows all modules with their status (enabled/disabled) and paths.

### Create New Module
```bash
php artisan module:make ModuleName
```
Creates a new module with the standard directory structure.

### Enable/Disable Module
```bash
# Enable a module
php artisan module:enable ModuleName

# Disable a module
php artisan module:disable ModuleName
```

### Delete Module
```bash
php artisan module:delete ModuleName
```
Permanently deletes a module from the application.

### Use Module
```bash
# Set active module context
php artisan module:use ModuleName

# Clear active module context
php artisan module:unuse
```

### Update Module Dependencies
```bash
# Update specific module
php artisan module:update ModuleName

# Update all modules
php artisan module:update
```

### Dump Autoload
```bash
php artisan module:dump ModuleName
```
Regenerates the autoload files for a module.

### Composer Update
```bash
php artisan module:composer-update
```
Updates the composer.json autoload configuration.

---

## Code Generation

All generation commands follow the pattern:
```bash
php artisan module:make-{type} {ClassName} {ModuleName}
```

### Controllers
```bash
# Basic controller
php artisan module:make-controller UserController Blog

# Resource controller
php artisan module:make-controller UserController Blog --resource

# API controller
php artisan module:make-controller UserController Blog --api
```

### Models
```bash
# Basic model
php artisan module:make-model User Blog

# Model with migration
php artisan module:make-model User Blog -m

# Model with factory
php artisan module:make-model User Blog -f

# Model with seeder
php artisan module:make-model User Blog -s

# Model with all
php artisan module:make-model User Blog -mfs
```

### Migrations
```bash
php artisan module:make-migration create_users_table Blog
```

### Seeders
```bash
php artisan module:make-seed UserSeeder Blog
```

### Factories
```bash
php artisan module:make-factory UserFactory Blog
```

### Requests
```bash
php artisan module:make-request StoreUserRequest Blog
```

### Resources
```bash
php artisan module:make-resource UserResource Blog
```

### Commands
```bash
php artisan module:make-command SendEmails Blog
```

### Events & Listeners
```bash
# Create event
php artisan module:make-event UserCreated Blog

# Create listener
php artisan module:make-listener SendWelcomeEmail Blog
```

### Jobs
```bash
php artisan module:make-job ProcessPayment Blog
```

### Mail
```bash
php artisan module:make-mail WelcomeMail Blog
```

### Notifications
```bash
php artisan module:make-notification OrderShipped Blog
```

### Middleware
```bash
php artisan module:make-middleware CheckAge Blog
```

### Policies
```bash
php artisan module:make-policy UserPolicy Blog
```

### Providers
```bash
# Service provider
php artisan module:make-provider PaymentServiceProvider Blog

# Event provider
php artisan module:make-event-provider Blog

# Route provider
php artisan module:route-provider Blog
```

### Other Generators
```bash
# Action class
php artisan module:make-action CreateUser Blog

# Cast class
php artisan module:make-cast Json Blog

# Channel class
php artisan module:make-channel OrderChannel Blog

# Component class
php artisan module:make-component Alert Blog

# Component view
php artisan module:make-component-view alert Blog

# Enum class
php artisan module:make-enum UserStatus Blog

# Exception class
php artisan module:make-exception InvalidOrder Blog

# Helper class
php artisan module:make-helper StringHelper Blog

# Interface class
php artisan module:make-interface PaymentGateway Blog

# Observer class
php artisan module:make-observer UserObserver Blog

# Repository class
php artisan module:make-repository UserRepository Blog

# Rule class
php artisan module:make-rule Uppercase Blog

# Scope class
php artisan module:make-scope ActiveScope Blog

# Service class
php artisan module:make-service PaymentService Blog

# Test class
php artisan module:make-test UserTest Blog

# Trait class
php artisan module:make-trait HasSlug Blog

# View
php artisan module:make-view index Blog
```

---

## Database & Migrations

### Run Migrations
```bash
# Migrate specific module
php artisan module:migrate Blog

# Migrate all modules
php artisan module:migrate
```

### Migration Status
```bash
php artisan module:migrate-status
```

### Rollback Migrations
```bash
php artisan module:migrate-rollback Blog
```

### Reset Migrations
```bash
php artisan module:migrate-reset Blog
```

### Refresh Migrations
```bash
php artisan module:migrate-refresh Blog
```

### Fresh Migrations
```bash
php artisan module:migrate-fresh
```
Drops all tables and re-runs all migrations.

### Run Seeders
```bash
# Seed specific module
php artisan module:seed Blog

# Seed all modules
php artisan module:seed
```

---

## Publishing

### Publish Assets
```bash
php artisan module:publish Blog
```

### Publish Config
```bash
php artisan module:publish-config Blog
```

### Publish Migrations
```bash
php artisan module:publish-migration Blog
```

### Publish Translations
```bash
php artisan module:publish-translation Blog
```

---

## Module-Specific Commands

### Media Module

The Media module provides a global media library powered by Spatie Media Library.

#### `media:list`
List all media files in the system.

```bash
# List all media
php artisan media:list

# Filter by collection
php artisan media:list --collection=avatars

# Filter by type
php artisan media:list --type=image

# Limit results
php artisan media:list --limit=50
```

**Options:**
| Option | Description |
|--------|-------------|
| `--collection=` | Filter by collection name |
| `--type=` | Filter by type (image, video, audio, document) |
| `--limit=20` | Limit number of results |

#### `media:stats`
Display media library statistics.

```bash
php artisan media:stats
```

Shows overview of total files, total size, breakdown by collection, and breakdown by MIME type.

#### `media:clean`
Clean orphaned media files and directories.

```bash
# Run cleanup with confirmation
php artisan media:clean

# Dry run (preview without deleting)
php artisan media:clean --dry-run

# Force without confirmation
php artisan media:clean --force
```

**Options:**
| Option | Description |
|--------|-------------|
| `--dry-run` | Preview files that would be removed |
| `--force` | Skip confirmation prompt |

---

### Product Module

#### `product:list`
List all products in the system.

```bash
# List all products
php artisan product:list

# Filter active products by category
php artisan product:list --active --category=electronics --limit=5
```

**Options:**
| Option | Description |
|--------|-------------|
| `--active` | Show only active products |
| `--category=` | Filter by category |
| `--limit=10` | Limit number of results |

#### `product:create`
Create a new product from the command line.

```bash
php artisan product:create "Product Name" --price=99.99 --category=electronics --sku=SKU001 --stock=100
```

**Arguments:**
| Argument | Description |
|----------|-------------|
| `name` | The name of the product (required) |

**Options:**
| Option | Description |
|--------|-------------|
| `--price=` | Product price |
| `--category=` | Product category |
| `--description=` | Product description |
| `--sku=` | Product SKU |
| `--stock=0` | Initial stock quantity |

---

### Outlet Module

#### `outlet:list`
List all outlets in the system.

```bash
# List all outlets
php artisan outlet:list

# List only active outlets
php artisan outlet:list --active
```

**Options:**
| Option | Description |
|--------|-------------|
| `--active` | Show only active outlets |

---

## Utility Commands

### List Commands in Module
```bash
php artisan module:list-commands Blog
```

### Check Language Keys
```bash
php artisan module:lang Blog
```

### Show Model Information
```bash
php artisan module:model-show User Blog
```

### Prune Models
```bash
php artisan module:prune Blog
```

### Update PHPUnit Coverage
```bash
php artisan module:update-phpunit-coverage
```

### Setup Modules
```bash
php artisan module:setup
```
Initial setup for modules folder structure.

### Migrate from v5 to v6
```bash
php artisan module:v6:migrate
```

---

## Module Directory Structure

Each module follows this standard structure:

```
Modules/{ModuleName}/
├── app/
│   ├── Console/
│   │   └── Commands/
│   ├── Http/
│   │   ├── Controllers/
│   │   ├── Middleware/
│   │   └── Requests/
│   ├── Models/
│   └── Providers/
│       ├── EventServiceProvider.php
│       ├── {ModuleName}ServiceProvider.php
│       └── RouteServiceProvider.php
├── config/
│   └── config.php
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── assets/
│   ├── js/
│   ├── lang/
│   └── views/
├── routes/
│   ├── api.php
│   └── web.php
├── tests/
│   ├── Feature/
│   └── Unit/
├── composer.json
├── module.json
├── package.json
└── vite.config.js
```

---

## Tips & Best Practices

1. **Always specify the module name** when running generation commands to ensure files are created in the correct location.

2. **Use `module:use`** when working extensively with one module to avoid typing the module name repeatedly.

3. **Run `module:dump`** after manually adding classes to ensure autoloading works correctly.

4. **Keep modules independent** - avoid tight coupling between modules for better maintainability.

5. **Use module-specific migrations** instead of publishing them to the main migrations folder.

---

## Quick Reference

| Task | Command |
|------|---------|
| Create module | `php artisan module:make ModuleName` |
| Create controller | `php artisan module:make-controller Name Module` |
| Create model | `php artisan module:make-model Name Module` |
| Create migration | `php artisan module:make-migration name Module` |
| Run migrations | `php artisan module:migrate Module` |
| Run seeders | `php artisan module:seed Module` |
| Enable module | `php artisan module:enable Module` |
| Disable module | `php artisan module:disable Module` |
| List modules | `php artisan module:list` |
