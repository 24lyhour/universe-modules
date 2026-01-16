#!/bin/bash

# =============================================================================
# Create Module Script
# Automatically generates a new Laravel module with its own git repository
# =============================================================================

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get the module name from argument
MODULE_NAME=$1

if [ -z "$MODULE_NAME" ]; then
    echo -e "${RED}Error: Module name is required${NC}"
    echo ""
    echo "Usage: ./scripts/create-module.sh ModuleName"
    echo ""
    echo "Examples:"
    echo "  ./scripts/create-module.sh Branch"
    echo "  ./scripts/create-module.sh Invoice"
    echo "  ./scripts/create-module.sh Notification"
    exit 1
fi

# Get the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MODULE_PATH="$PROJECT_ROOT/Modules/$MODULE_NAME"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}  Creating Module: $MODULE_NAME${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Step 1: Generate the module using Laravel artisan
echo -e "${YELLOW}Step 1: Generating module with artisan...${NC}"
cd "$PROJECT_ROOT"
php artisan module:make "$MODULE_NAME"

if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to create module${NC}"
    exit 1
fi

# Step 2: Generate model with migration, factory, seeder
echo -e "${YELLOW}Step 2: Generating model with migration, factory, seeder...${NC}"
php artisan module:make-model "$MODULE_NAME" "$MODULE_NAME" -mfs

# Step 3: Initialize git repository in the module
echo -e "${YELLOW}Step 3: Initializing git repository...${NC}"
cd "$MODULE_PATH"

# Remove .git if it already exists (shouldn't happen, but just in case)
rm -rf .git 2>/dev/null

# Initialize new git repo
git init
git add .
git commit -m "Initial commit: $MODULE_NAME module"

echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}  Module '$MODULE_NAME' created successfully!${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo -e "Location: ${BLUE}Modules/$MODULE_NAME/${NC}"
echo ""
echo -e "Files created:"
echo -e "  - ${BLUE}app/Http/Controllers/${MODULE_NAME}Controller.php${NC}"
echo -e "  - ${BLUE}app/Models/${MODULE_NAME}.php${NC}"
echo -e "  - ${BLUE}app/Providers/${MODULE_NAME}ServiceProvider.php${NC}"
echo -e "  - ${BLUE}database/migrations/create_${MODULE_NAME,,}s_table.php${NC}"
echo -e "  - ${BLUE}database/factories/${MODULE_NAME}Factory.php${NC}"
echo -e "  - ${BLUE}database/seeders/${MODULE_NAME}Seeder.php${NC}"
echo -e "  - ${BLUE}routes/web.php${NC}"
echo -e "  - ${BLUE}routes/api.php${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Reload VSCode: Cmd+Shift+P → 'Reload Window'"
echo -e "  2. Edit the migration file to add your columns"
echo -e "  3. Run: php artisan module:migrate $MODULE_NAME"
echo ""
echo -e "${YELLOW}Optional - Generate more components:${NC}"
echo -e "  php artisan module:make-service ${MODULE_NAME}Service $MODULE_NAME"
echo -e "  php artisan module:make-repository ${MODULE_NAME}Repository $MODULE_NAME"
echo -e "  php artisan module:make-request Store${MODULE_NAME}Request $MODULE_NAME"
echo -e "  php artisan module:make-request Update${MODULE_NAME}Request $MODULE_NAME"
echo -e "  php artisan module:make-resource ${MODULE_NAME}Resource $MODULE_NAME"
echo ""
