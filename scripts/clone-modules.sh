#!/bin/bash
# Clone module submodules manually if they're empty
# Uses GITHUB_TOKEN env var for private repo access

set -x  # Enable verbose mode to show all commands
exec 2>&1  # Redirect stderr to stdout for better logging

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

echo "=== Starting module clone script ==="
echo "Current directory: $(pwd)"

# Show what's in Modules BEFORE cloning
echo "=== BEFORE: Contents of Modules directory ==="
ls -la "$MODULES_DIR" 2>/dev/null || echo "Modules directory does not exist"

# Create Modules directory if it doesn't exist (excluded by .dockerignore)
mkdir -p "$MODULES_DIR"

if [ -n "$GITHUB_TOKEN" ]; then
    echo "GITHUB_TOKEN is SET (length: ${#GITHUB_TOKEN})"
else
    echo "WARNING: GITHUB_TOKEN is NOT SET - private repos will fail"
fi

for module in "${!MODULES[@]}"; do
    MODULE_PATH="$MODULES_DIR/$module"
    CLONE_URL=$(get_clone_url "${MODULES[$module]}")

    echo "--- Processing $module ---"
    echo "  Path: $MODULE_PATH"
    echo "  module.json exists: $(test -f "$MODULE_PATH/module.json" && echo "YES" || echo "NO")"

    # Always clone fresh - remove any existing directory
    if [ ! -f "$MODULE_PATH/module.json" ]; then
        echo "  Action: CLONING (module.json not found)"
        rm -rf "$MODULE_PATH"
        if git clone --depth 1 -b main "$CLONE_URL" "$MODULE_PATH" 2>&1; then
            echo "  Result: SUCCESS"
            echo "  Contents: $(ls -la "$MODULE_PATH" | head -5)"
        else
            echo "  Result: FAILED"
        fi
    else
        echo "  Action: SKIPPING (module.json exists)"
    fi
done

echo "=== AFTER: Contents of Modules directory ==="
ls -la "$MODULES_DIR"

echo "=== Verifying Customer module ==="
ls -la "$MODULES_DIR/Customer/resources/js/Components/" 2>/dev/null || echo "Customer Components not found!"

echo "=== Module clone script complete ==="
