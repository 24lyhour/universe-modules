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
- [Scheduled Tasks](#scheduled-tasks)
- [Common Workflows](#common-workflows)
- [Modules Reference](#modules-reference)
    - [Blog Module](#blog-module)
    - [Company Module](#company-module)
    - [Customer Module](#customer-module)
    - [Hotel Module](#hotel-module)
    - [Menu Module](#menu-module)
    - [Payment Module](#payment-module)
    - [Porfolio Module](#porfolio-module)
    - [Movice Module](#movice-module)
- [Git Workflow for Modules](#git-workflow-for-modules)
- [Troubleshooting](#troubleshooting)

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

### Create a New Module (Recommended)

Use the custom script to create a module with its own git repository:

```bash
# Create a new module with auto git repository (RECOMMENDED)
./scripts/create-module.sh ModuleName

# Or use composer
composer module:create ModuleName

# Examples:
./scripts/create-module.sh Branch
./scripts/create-module.sh Invoice
./scripts/create-module.sh Notification
```

This script automatically:

1. Creates the module using `php artisan module:make`
2. Generates model with migration, factory, and seeder
3. Initializes a git repository in the module
4. Commits all files

### Create a New Module (Basic - No Git)

```bash
# Create a new module with default structure (no separate git repo)
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

## Modules Reference

This section provides detailed documentation for all modules in the Universe application.

### Overview

| Module   | Path                | Architecture         | Status              |
| -------- | ------------------- | -------------------- | ------------------- |
| Blog     | `Modules/Blog/`     | Repository + Service | Full Implementation |
| Company  | `Modules/Company/`  | Repository + Service | Full Implementation |
| Customer | `Modules/Customer/` | Basic CRUD           | Scaffold            |
| Hotel    | `Modules/Hotel/`    | Repository + Service | Full Implementation |
| Menu     | `Modules/Menu/`     | Basic CRUD           | Scaffold            |
| Payment  | `Modules/Payment/`  | Basic CRUD           | Scaffold            |
| Porfolio | `Modules/Porfolio/` | Repository + Service | Full Implementation |
| Movice   | `Modules/Movice/`   | Basic CRUD           | In Progress         |

---

### Blog Module

Manages blog posts with full repository pattern implementation.

**Structure:**

```
Modules/Blog/
├── app/
│   ├── Contracts/
│   │   └── PostRepositoryInterface.php
│   ├── Http/Controllers/
│   │   └── BlogController.php
│   ├── Models/
│   │   └── Post.php
│   ├── Providers/
│   │   └── BlogServiceProvider.php
│   ├── Repositories/
│   │   └── PostRepository.php
│   └── Services/
│       └── PostService.php
├── database/migrations/
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Blog
php artisan module:disable Blog

# Run migrations
php artisan module:migrate Blog

# Seed data
php artisan module:seed Blog
```

**Routes:**

- Web: `/blogs` (Prefix: `blogs`)
- API: `/api/v1/blogs`

**Service Methods:**

- `getAllPosts()` - Get all posts
- `getPaginatedPosts($perPage)` - Get paginated posts
- `getPostById($id)` - Get post by ID
- `getPostBySlug($slug)` - Get post by slug
- `createPost($data)` - Create a new post
- `updatePost($id, $data)` - Update a post
- `deletePost($id)` - Delete a post
- `getPublishedPosts($perPage)` - Get published posts
- `getDraftPosts($perPage)` - Get draft posts

---

### Company Module

Manages company information with repository pattern.

**Structure:**

```
Modules/Company/
├── app/
│   ├── Contracts/
│   │   └── CompanyRepositoryInterface.php
│   ├── Http/Controllers/
│   │   └── CompanyController.php
│   ├── Models/
│   │   └── Company.php
│   ├── Providers/
│   │   └── CompanyServiceProvider.php
│   ├── Repositories/
│   │   └── CompanyRepository.php
│   └── Services/
│       └── CompanyService.php
├── database/migrations/
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Company
php artisan module:disable Company

# Run migrations
php artisan module:migrate Company

# Seed data
php artisan module:seed Company
```

**Routes:**

- Web: `/companies` (Prefix: `companies`)
- API: `/api/v1/companies`

---

### Customer Module

Basic customer management module (scaffold).

**Structure:**

```
Modules/Customer/
├── app/
│   ├── Http/Controllers/
│   │   └── CustomerController.php
│   ├── Models/
│   └── Providers/
│       └── CustomerServiceProvider.php
├── database/migrations/
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Customer
php artisan module:disable Customer

# Run migrations
php artisan module:migrate Customer

# Generate additional components
php artisan module:make-model Customer Customer -mf
php artisan module:make-service CustomerService Customer
php artisan module:make-repository CustomerRepository Customer
```

**Routes:**

- Web: `/customers` (Prefix: `customers`)
- API: `/api/v1/customers`

---

### Hotel Module

Manages hotel information with full repository pattern and dependency injection.

**Structure:**

```
Modules/Hotel/
├── app/
│   ├── Contracts/
│   │   └── HotelRepositoryInterface.php
│   ├── Http/Controllers/
│   │   └── HotelController.php
│   ├── Models/
│   │   └── Hotel.php
│   ├── Providers/
│   │   └── HotelServiceProvider.php
│   ├── Repositories/
│   │   └── HotelRepository.php
│   └── Services/
│       └── HotelService.php
├── database/migrations/
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Hotel
php artisan module:disable Hotel

# Run migrations
php artisan module:migrate Hotel

# Seed data
php artisan module:seed Hotel
```

**Routes:**

- Web: `/hotels` (Prefix: `hotels`)
- API: `/api/v1/hotels`

**Service Methods:**

- `getAllHotels()` - Get all hotels
- `getPaginatedHotels($perPage)` - Get paginated hotels
- `getHotelById($id)` - Get hotel by ID
- `getHotelBySlug($slug)` - Get hotel by slug
- `createHotel($data)` - Create a new hotel
- `updateHotel($id, $data)` - Update a hotel
- `deleteHotel($id)` - Delete a hotel
- `getActiveHotels($perPage)` - Get active hotels
- `getHotelsByCity($city, $perPage)` - Get hotels by city
- `getHotelsByStarRating($rating, $perPage)` - Get hotels by rating
- `searchHotels($query, $perPage)` - Search hotels

---

### Menu Module

Basic menu management module (scaffold) with scheduled command.

**Structure:**

```
Modules/Menu/
├── app/
│   ├── Http/Controllers/
│   │   └── MenuController.php
│   ├── Models/
│   └── Providers/
│       └── MenuServiceProvider.php
├── database/migrations/
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Menu
php artisan module:disable Menu

# Run migrations
php artisan module:migrate Menu

# Generate additional components
php artisan module:make-model Menu Menu -mf
php artisan module:make-service MenuService Menu
php artisan module:make-repository MenuRepository Menu
```

**Routes:**

- Web: `/menus` (Prefix: `menus`)
- API: `/api/v1/menus`

**Note:** This module has a scheduled command configured (`inspire:hourly`).

---

### Payment Module

Basic payment processing module (scaffold).

**Structure:**

```
Modules/Payment/
├── app/
│   ├── Http/Controllers/
│   │   └── PaymentController.php
│   ├── Models/
│   └── Providers/
│       └── PaymentServiceProvider.php
├── database/migrations/
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Payment
php artisan module:disable Payment

# Run migrations
php artisan module:migrate Payment

# Generate additional components
php artisan module:make-model Payment Payment -mf
php artisan module:make-service PaymentService Payment
php artisan module:make-repository PaymentRepository Payment
```

**Routes:**

- Web: `/payments` (Prefix: `payments`)
- API: `/api/v1/payments`

---

### Porfolio Module

Manages portfolio projects with categories support.

**Structure:**

```
Modules/Porfolio/
├── app/
│   ├── Contracts/
│   │   └── PortfolioRepositoryInterface.php
│   ├── Http/Controllers/
│   │   └── PorfolioController.php
│   ├── Models/
│   │   └── Portfolio.php
│   ├── Providers/
│   │   └── PorfolioServiceProvider.php
│   ├── Repositories/
│   │   └── PortfolioRepository.php
│   └── Services/
│       └── PortfolioService.php
├── database/migrations/
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Porfolio
php artisan module:disable Porfolio

# Run migrations
php artisan module:migrate Porfolio

# Seed data
php artisan module:seed Porfolio
```

**Routes:**

- Web: `/porfolios` (Prefix: `porfolios`)
- API: `/api/v1/porfolios`

**Service Methods:**

- `getAllPortfolios()` - Get all portfolios
- `getPaginatedPortfolios($perPage)` - Get paginated portfolios
- `getPortfolioById($id)` - Get portfolio by ID
- `getPortfolioBySlug($slug)` - Get portfolio by slug
- `createPortfolio($data)` - Create a new portfolio
- `updatePortfolio($id, $data)` - Update a portfolio
- `deletePortfolio($id)` - Delete a portfolio
- `getPublishedPortfolios($perPage)` - Get published portfolios
- `getPortfoliosByCategory($category, $perPage)` - Get by category
- `getCategories()` - Get all categories

---

### Movice Module

Movie management module (in development).

**Structure:**

```
Modules/Movice/
├── app/
│   ├── Http/Controllers/
│   │   └── MoviceController.php
│   ├── Models/
│   │   └── Movice.php
│   ├── Providers/
│   │   └── MoviceServiceProvider.php
├── database/
│   ├── factories/
│   │   └── MoviceFactory.php
│   ├── migrations/
│   │   └── create_movices_table.php
│   └── seeders/
│       └── MoviceSeeder.php
├── routes/
│   ├── api.php
│   └── web.php
└── resources/views/
```

**CLI Commands:**

```bash
# Enable/Disable
php artisan module:enable Movice
php artisan module:disable Movice

# Run migrations
php artisan module:migrate Movice

# Seed data
php artisan module:seed Movice
```

**Routes:**

- Web: `/movices` (Prefix: `movices`)
- API: `/api/v1/movices`

---

### Module Routes Summary

Each module exposes:

- **Web Routes**: `/{module-name}` (e.g., `/customers`, `/blogs`)
- **API Routes**: `/api/v1/{module-name}` (e.g., `/api/v1/customers`)

All web routes require `auth` and `verified` middleware.
All API routes require `auth:sanctum` middleware.

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

Flags:

Flag Description
-m Create migration
-f Create factory
-s Create seeder
-c Create controller
Or individually:

# Model + Migration

php artisan module:make-model Category Menu -m

# Model + Migration + Factory

php artisan module:make-model Category Menu -mf

# Model + Migration + Factory + Seeder

php artisan module:make-model Category Menu -mfs

# All (Model + Migration + Factory + Seeder + Controller)

php artisan module:make-model Category Menu -mfsc
Want me to run it for you?

php artisan module:make-model Category Menu -mfsc
This will create:

Modules/Menu/app/Models/Category.php
Modules/Menu/database/migrations/\*\_create_categories_table.php
Modules/Menu/database/factories/CategoryFactory.php
Modules/Menu/database/seeders/CategorySeeder.php
Modules/Menu/app/Http/Controllers/CategoryController.php

### genrate the route and action files

The resources/js/actions/ and resources/js/routes/ folders contain auto-generated Wayfinder files. They are generated from your Laravel routes and MUST be committed because Railway doesn't run php artisan wayfinder:generate.

Your options:

Commit all Wayfinder files (296 files) - Works now
Add Wayfinder to Railway build - Add php artisan wayfinder:generate before yarn build in your Dockerfile
