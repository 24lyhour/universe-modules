Done. I created two CLI commands for the Product module:

1. ProductCommand.php - List products

a product:list [--active] [--category=] [--limit=10] 2. ProductCreateCommand.php - Create product

a product:create "Product Name" [--price=] [--category=] [--description=] [--sku=] [--stock=0]
Examples:

# List all products

php artisan product:list

# List active products in a category

php artisan product:list --active --category=electronics --limit=5

# Create a new product

php artisan product:create "iPhone 15" --price=999.99 --category=electronics --sku=IPH15-001 --stock=100
