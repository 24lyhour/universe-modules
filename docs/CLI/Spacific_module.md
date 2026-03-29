Create Module

# Create a new module

php artisan module:make ModuleName

# Create module with specific features

php artisan module:make ModuleName --api # API module
php artisan module:make ModuleName --web # Web module
php artisan module:make ModuleName --plain # Plain module (minimal)
Migrations for Specific Module

# Run migrations for a specific module

php artisan module:migrate ModuleName

# Rollback migrations for a specific module

php artisan module:migrate-rollback ModuleName

# Reset migrations for a specific module

php artisan module:migrate-reset ModuleName

# Refresh migrations for a specific module

php artisan module:migrate-refresh ModuleName

# Create a migration in a specific module

php artisan module:make-migration create_table_product_promotion_table ModuleName
Other Useful Module Commands

# Create model in module

php artisan module:make-model ModelName ModuleName

# Create controller in module

php artisan module:make-controller ControllerName ModuleName

# Create seeder in module

php artisan module:make-seeder SeederName ModuleName

# Run seeders for a specific module

php artisan module:seed ModuleName

# List all modules

php artisan module:list
Examples for your project:

# Migrate only Employee module

php artisan module:migrate Employee

# Migrate only Product module

php artisan module:migrate Product

# Seed only Employee module

php artisan module:seed Employee

# spacific patten

Here are the CLI commands to create a Form Request in Laravel:

Standard Laravel

php artisan make:request StoreOrderRequest
php artisan make:request UpdateOrderRequest
For Module (nwidart/laravel-modules)

# Basic

php artisan module:make-request StoreShippingZoneRequest Order

# With subdirectory

php artisan module:make-request Dashboard/V1/ShippingZone/StoreShippingZoneRequest Order
php artisan module:make-request Dashboard/V1/ShippingZoneRequest/UpdateShippingZoneRequest Order
This creates files at:

Modules/Order/app/Http/Requests/Dashboard/V1/ShippingZone/StoreShippingZoneRequest.php
Modules/Order/app/Http/Requests/Dashboard/V1/ShippingZone/UpdateShippingZoneRequest.php
