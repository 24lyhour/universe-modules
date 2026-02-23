<!-- Correct commands: -->

# By path (URL)

php artisan route:list --path=dashboard/portfolios

# By name

php artisan route:list --name=porfolio

You can create a model in a specific module path using the nwidart/laravel-modules artisan commands:

# Basic model in module

php artisan module:make-model Portfolio Porfolio

# Model with migration

php artisan module:make-model Portfolio Porfolio -m

# Model with migration, factory, and seeder

php artisan module:make-model Portfolio Porfolio -mfs

# Model with all (migration, factory, seeder, controller, resource)

php artisan module:make-model Portfolio Porfolio --all
Syntax:

php artisan module:make-model {ModelName} {ModuleName} [options]
Available options:

Flag Description
-m Create a migration file
-f Create a factory file
-s Create a seeder file
-c Create a controller
-r Create a resource controller
--all Create all of the above
Example for your Porfolio module:

# Create Category model with migration

php artisan module:make-model Category Porfolio -m
This creates:

Modules/Porfolio/app/Models/Category.php
Modules/Porfolio/database/migrations/xxxx_create_categories_table.php

Spacific path:::

# Model

php artisan module:make-model OutletType Outlet

# Migration

php artisan module:make-migration create_outlet_types_table Outlet

# Controller in Dashboard/V1

php artisan module:make-controller Dashboard/V1/OutletTypeDashboardController Outlet

# API Controller

php artisan module:make-controller Api/V1/OutletTypeApiController Outlet

# Form Requests

php artisan module:make-request Dashboard/V1/StoreOutletTypeRequest Outlet
php artisan module:make-request Dashboard/V1/UpdateOutletTypeRequest Outlet
php artisan module:make-request Api/V1/StoreOutletTypeRequest Outlet
php artisan module:make-request Api/V1/UpdateOutletTypeRequest Outlet

# Resource

php artisan module:make-resource OutletTypeResource Outlet

# Factory

php artisan module:make-factory OutletTypeFactory Outlet

# Seeder

php artisan module:make-seeder OutletTypeSeeder Outlet

# Service (manual - no built-in command)

# Action (manual - no built-in command)

CLI command to generate controller in specific path:

php artisan module:make-controller Dashboard/V1/OutletTypeDashboardController Outlet
Pattern:

php artisan module:make-controller {Path/ControllerName} {ModuleName}
More examples for your structure:

# Dashboard controller

php artisan module:make-controller Dashboard/V1/OutletTypeDashboardController Outlet

# API controller

php artisan module:make-controller Api/V1/OutletTypeApiController Outlet

# Form Requests

php artisan module:make-request Dashboard/V1/StoreOutletTypeRequest Outlet
php artisan module:make-request Dashboard/V1/UpdateOutletTypeRequest Outlet
php artisan module:make-request Api/V1/StoreOutletTypeRequest Outlet
php artisan module:make-request Api/V1/UpdateOutletTypeRequest Outlet

# module:make-model supports:

php artisan module:make-model OutletType Outlet -m -f -s -c

# -m = migration

# -f = factory

# -s = seeder

# -c = controller (but creates in root Controllers/)

# module:make-controller - NO extra flags

php artisan module:make-controller Dashboard/V1/OutletTypeDashboardController Outlet

# module:make-request - NO extra flags

php artisan module:make-request Dashboard/V1/StoreOutletTypeRequest Outlet
For your structure, you need separate commands:

# 1. Model + migration + factory + seeder

php artisan module:make-model OutletType Outlet -mfs

# 2. Dashboard controller (separate)

php artisan module:make-controller Dashboard/V1/OutletTypeDashboardController Outlet

# 3. API controller (separate)

php artisan module:make-controller Api/V1/OutletTypeApiController Outlet

# 4. Requests (separate)

php artisan module:make-request Dashboard/V1/StoreOutletTypeRequest Outlet
php artisan module:make-request Dashboard/V1/UpdateOutletTypeRequest Outlet

Generate APP_KEY locally

php artisan key:generate --show
