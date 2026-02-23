#!/bin/bash
# Clone module submodules manually if they're empty
# Uses GITHUB_TOKEN env var for private repo access

MODULES_DIR="Modules"

# Module repos
declare -A MODULES=(
    ["Blog"]="universe-modules-Blog"
    ["Booking"]="universe-modules-Booking"
    ["Company"]="universe-modules-Company"
    ["Customer"]="universe-modules-Customer"
    ["Employee"]="universe-modules-Employee"
    ["Hotel"]="universe-modules-Hotel"
    ["Media"]="universe-modules-Media"
    ["Menu"]="universe-modules-Menu"
    ["Movice"]="universe-modules-Movice"
    ["Order"]="universe-modules-Order"
    ["Outlet"]="universe-modules-Outlet"
    ["Payment"]="universe-modules-Payment"
    ["Porfolio"]="universe-modules-Porfolio"
    ["Product"]="universe-modules-Product"
    ["Report"]="universe-modules-Report"
    ["School"]="universe-modules-School"
    ["Wallets"]="universe-modules-Wallet"
)

# Build clone URL with token if available
get_clone_url() {
    local repo_name=$1
    if [ -n "$GITHUB_TOKEN" ]; then
        echo "https://${GITHUB_TOKEN}@github.com/24lyhour/${repo_name}.git"
    else
        echo "https://github.com/24lyhour/${repo_name}.git"
    fi
}

echo "=== Checking and cloning modules ==="
if [ -n "$GITHUB_TOKEN" ]; then
    echo "Using GITHUB_TOKEN for private repo access"
else
    echo "WARNING: No GITHUB_TOKEN set - private repos will fail"
fi

for module in "${!MODULES[@]}"; do
    MODULE_PATH="$MODULES_DIR/$module"
    CLONE_URL=$(get_clone_url "${MODULES[$module]}")

    # Check if module has actual content (not just .git file from submodule)
    # A proper module should have module.json file
    if [ ! -f "$MODULE_PATH/module.json" ]; then
        echo "Cloning $module..."
        rm -rf "$MODULE_PATH"
        git clone --depth 1 -b main "$CLONE_URL" "$MODULE_PATH"
    else
        echo "$module already exists with content"
    fi
done

echo "=== Modules cloned successfully ==="
ls -la $MODULES_DIR/
