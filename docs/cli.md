# Universe CLI Documentation

This document provides a comprehensive guide to all CLI commands available in the Universe Laravel application.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Server](#development-server)
- [Module Commands](#module-commands)
- [Database Commands](#database-commands)
- [Cache & Optimization](#cache--optimization)
- [Telescope (Debugging)](#telescope-debugging)
- [Queue Commands](#queue-commands)
- [Common Workflows](#common-workflows)

---

## Getting Started

### Prerequisites

```bash
# Check PHP version (requires PHP 8.2+)
php -v

# Check Composer
composer -V

# Check Node.js
node -v
```

### Installation

```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run database migrations
php artisan migrate

# Link storage
php artisan storage:link
```

---

## Development Server

### Start the Application

```bash
# Start PHP development server (default: http://localhost:8000)
php artisan serve

# Start with custom port
php artisan serve --port=8080

# Start Vite development server (for frontend assets)
npm run dev

# Build frontend assets for production
npm run build
```

### Application Status

```bash
# Display application information
php artisan about

# Display current environment
php artisan env

# List all registered routes
php artisan route:list

# List routes filtered by path
php artisan route:list --path=api

# List routes filtered by name
php artisan route:list --name=customer
```

---

## Module Commands

This project uses **nwidart/laravel-modules** for modular architecture. All modules are located in the `Modules/` directory.

### List & Manage Modules

```bash
# List all modules with status
php artisan module:list

# Enable a module
php artisan module:enable Customer

# Disable a module
php artisan module:disable Customer

# Delete a module (use with caution!)
php artisan module:delete ModuleName
```

### Create a New Module

```bash
# Create a new module with default structure
php artisan module:make ModuleName

# Example: Create a Branch module
php artisan module:make Branch
```

This creates the following structure:

```
Modules/
└── ModuleName/
    ├── app/
    │   ├── Http/Controllers/
    │   ├── Models/
    │   └── Providers/
    ├── config/
    ├── database/
    │   ├── factories/
    │   ├── migrations/
    │   └── seeders/
    ├── resources/
    │   └── views/
    ├── routes/
    │   ├── api.php
    │   └── web.php
    ├── tests/
    └── composer.json
```

### Generate Module Components

```bash
# Generate a controller
php artisan module:make-controller CustomerController Customer

# Generate a model
php artisan module:make-model Customer Customer

# Generate a model with migration, factory, and seeder
php artisan module:make-model Customer Customer -mfs

# Generate a migration
php artisan module:make-migration create_customers_table Customer

# Generate a seeder
php artisan module:make-seed CustomerSeeder Customer

# Generate a factory
php artisan module:make-factory CustomerFactory Customer

# Generate a service class
php artisan module:make-service CustomerService Customer

# Generate a repository class
php artisan module:make-repository CustomerRepository Customer

# Generate an interface
php artisan module:make-interface CustomerRepositoryInterface Customer

# Generate a request class (form validation)
php artisan module:make-request StoreCustomerRequest Customer

# Generate a resource class (API response)
php artisan module:make-resource CustomerResource Customer

# Generate middleware
php artisan module:make-middleware CheckCustomerAccess Customer

# Generate a command
php artisan module:make-command ProcessCustomers Customer

# Generate an event
php artisan module:make-event CustomerCreated Customer

# Generate a listener
php artisan module:make-listener SendWelcomeEmail Customer

# Generate a job
php artisan module:make-job ProcessCustomerData Customer

# Generate a policy
php artisan module:make-policy CustomerPolicy Customer

# Generate a view
php artisan module:make-view index Customer
```

### Module Migrations

```bash
# Run migrations for all modules
php artisan module:migrate

# Run migrations for a specific module
php artisan module:migrate Customer

# Rollback module migrations
php artisan module:migrate-rollback Customer

# Fresh migration (drop all tables and re-run)
php artisan module:migrate-fresh

# Check migration status
php artisan module:migrate-status
```

### Module Seeders

```bash
# Seed all modules
php artisan module:seed

# Seed a specific module
php artisan module:seed Customer
```

### Publishing Module Assets

```bash
# Publish module assets (views, config, etc.)
php artisan module:publish Customer

# Publish module config files
php artisan module:publish-config Customer

# Publish module translations
php artisan module:publish-translation Customer

# Publish module migrations to main app
php artisan module:publish-migration Customer
```

---

## Database Commands

### Migrations

```bash
# Run all pending migrations
php artisan migrate

# Run migrations with seeding
php artisan migrate --seed

# Rollback the last migration batch
php artisan migrate:rollback

# Rollback all migrations
php artisan migrate:reset

# Drop all tables and re-run migrations
php artisan migrate:fresh

# Drop all tables, re-run migrations, and seed
php artisan migrate:fresh --seed

# Check migration status
php artisan migrate:status
```

### Database Inspection

```bash
# Show database information
php artisan db:show

# Show table information
php artisan db:table users

# Start database CLI session
php artisan db

# Monitor database connections
php artisan db:monitor
```

### Seeders

```bash
# Run all seeders
php artisan db:seed

# Run a specific seeder
php artisan db:seed --class=UserSeeder
```

### Interactive Shell

```bash
# Start Tinker (REPL)
php artisan tinker
```

Example Tinker usage:

```php
// Create a user
User::create(['name' => 'John', 'email' => 'john@example.com', 'password' => bcrypt('password')]);

// Query customers
Modules\Customer\Models\Customer::all();

// Count records
Modules\Blog\Models\Post::count();
```

---

## Cache & Optimization

### Clear Caches

```bash
# Clear application cache
php artisan cache:clear

# Clear config cache
php artisan config:clear

# Clear route cache
php artisan route:clear

# Clear view cache
php artisan view:clear

# Clear event cache
php artisan event:clear

# Clear all cached files
php artisan optimize:clear
```

### Build Caches (Production)

```bash
# Cache configuration
php artisan config:cache

# Cache routes
php artisan route:cache

# Cache views
php artisan view:cache

# Cache events
php artisan event:cache

# Run all optimizations
php artisan optimize
```

---

## Telescope (Debugging)

Laravel Telescope is available for debugging in the local environment. Access it at `/telescope`.

```bash
# Install Telescope
php artisan telescope:install

# Publish Telescope assets
php artisan telescope:publish

# Clear Telescope data
php artisan telescope:clear

# Prune old Telescope entries
php artisan telescope:prune

# Prune entries older than 24 hours
php artisan telescope:prune --hours=24

# Pause Telescope watchers
php artisan telescope:pause

# Resume Telescope watchers
php artisan telescope:resume
```

---

## Queue Commands

```bash
# Start queue worker
php artisan queue:work

# Start queue worker for specific queue
php artisan queue:work --queue=high,default

# Process a single job
php artisan queue:work --once

# Listen to queue (restarts after code changes)
php artisan queue:listen

# View failed jobs
php artisan queue:failed

# Retry a failed job
php artisan queue:retry <job-id>

# Retry all failed jobs
php artisan queue:retry all

# Clear failed jobs
php artisan queue:flush

# Restart queue workers
php artisan queue:restart
```

---

## Scheduled Tasks

```bash
# List scheduled tasks
php artisan schedule:list

# Run the scheduler
php artisan schedule:run

# Test a scheduled command
php artisan schedule:test

# Start the schedule worker (for local development)
php artisan schedule:work
```

---

## Common Workflows

### Creating a New Module with Full CRUD

```bash
# 1. Create the module
php artisan module:make Branch

# 2. Create the model with migration and factory
php artisan module:make-model Branch Branch -mf

# 3. Create the controller
php artisan module:make-controller BranchController Branch

# 4. Create a service class
php artisan module:make-service BranchService Branch

# 5. Create a repository
php artisan module:make-repository BranchRepository Branch

# 6. Create form request validators
php artisan module:make-request StoreBranchRequest Branch
php artisan module:make-request UpdateBranchRequest Branch

# 7. Create API resource
php artisan module:make-resource BranchResource Branch

# 8. Run the migration
php artisan module:migrate Branch
```

### Running Tests

```bash
# Run all tests
php artisan test

# Run tests with coverage
php artisan test --coverage

# Run specific test file
php artisan test --filter=CustomerTest

# Run module tests
php artisan test Modules/Customer/tests
```

### Maintenance Mode

```bash
# Put application in maintenance mode
php artisan down

# Maintenance mode with custom message
php artisan down --message="Upgrading database"

# Allow specific IP during maintenance
php artisan down --allow=127.0.0.1

# Bring application back up
php artisan up
```

### Code Generation (Standard Laravel)

```bash
# Generate a controller
php artisan make:controller UserController

# Generate a model with everything
php artisan make:model Product -mfsc

# Generate a middleware
php artisan make:middleware EnsureUserIsAdmin

# Generate a mail class
php artisan make:mail WelcomeEmail

# Generate a notification
php artisan make:notification InvoicePaid

# Generate a job
php artisan make:job ProcessPayment
```

---

## Existing Modules

| Module | Path | Description |
|--------|------|-------------|
| Blog | `Modules/Blog/` | Blog posts management |
| Company | `Modules/Company/` | Company management |
| Customer | `Modules/Customer/` | Customer management |
| Hotel | `Modules/Hotel/` | Hotel management |
| Menu | `Modules/Menu/` | Menu management |
| Payment | `Modules/Payment/` | Payment processing |
| Porfolio | `Modules/Porfolio/` | Portfolio management |
| Movice | `Modules/Movice/` | Movie management |

### Module Routes

Each module exposes:

- **Web Routes**: `/{module-name}` (e.g., `/customers`, `/blogs`)
- **API Routes**: `/api/v1/{module-name}` (e.g., `/api/v1/customers`)

---

## Git Workflow for Modules

To push a module to its own GitHub repository:

```bash
# Navigate to module directory
cd Modules/ModuleName

# Initialize git (if not already)
git init

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/module-name.git

# Push to remote
git push -u origin main
```

---

## Helpful Tips

### Quickly Find Module Commands

```bash
# List all module-related commands
php artisan list module
```

### Get Help on Any Command

```bash
# Get help for a specific command
php artisan help module:make

# Get help with examples
php artisan module:make --help
```

### Auto-reload Development

```bash
# Run PHP server and Vite in parallel (use separate terminals)
# Terminal 1:
php artisan serve

# Terminal 2:
npm run dev
```

---

## Troubleshooting

### Module Not Loading

```bash
# Dump module autoload
php artisan module:dump

# Update composer autoload
composer dump-autoload

# Clear all caches
php artisan optimize:clear
```

### Database Issues

```bash
# Reset database completely
php artisan migrate:fresh --seed

# Check database connection
php artisan db:show
```

### Permission Issues

```bash
# Fix storage permissions
chmod -R 775 storage bootstrap/cache

# Clear compiled files
php artisan clear-compiled
```
