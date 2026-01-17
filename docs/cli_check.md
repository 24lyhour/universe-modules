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
