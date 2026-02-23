#!/bin/bash
# Clone module submodules manually if they're empty

MODULES_DIR="Modules"

declare -A MODULES=(
    ["Blog"]="https://github.com/24lyhour/universe-modules-Blog.git"
    ["Booking"]="https://github.com/24lyhour/universe-modules-Booking.git"
    ["Company"]="https://github.com/24lyhour/universe-modules-Company.git"
    ["Customer"]="https://github.com/24lyhour/universe-modules-Customer.git"
    ["Employee"]="https://github.com/24lyhour/universe-modules-Employee.git"
    ["Hotel"]="https://github.com/24lyhour/universe-modules-Hotel.git"
    ["Media"]="https://github.com/24lyhour/universe-modules-Media.git"
    ["Menu"]="https://github.com/24lyhour/universe-modules-Menu.git"
    ["Movice"]="https://github.com/24lyhour/universe-modules-Movice.git"
    ["Order"]="https://github.com/24lyhour/universe-modules-Order.git"
    ["Outlet"]="https://github.com/24lyhour/universe-modules-Outlet.git"
    ["Payment"]="https://github.com/24lyhour/universe-modules-Payment.git"
    ["Porfolio"]="https://github.com/24lyhour/universe-modules-Porfolio.git"
    ["Product"]="https://github.com/24lyhour/universe-modules-Product.git"
    ["Report"]="https://github.com/24lyhour/universe-modules-Report.git"
    ["School"]="https://github.com/24lyhour/universe-modules-School.git"
    ["Wallets"]="https://github.com/24lyhour/universe-modules-Wallet.git"
)

echo "=== Checking and cloning modules ==="

for module in "${!MODULES[@]}"; do
    MODULE_PATH="$MODULES_DIR/$module"

    # Check if module directory exists and has content
    if [ ! -d "$MODULE_PATH" ] || [ -z "$(ls -A $MODULE_PATH 2>/dev/null)" ]; then
        echo "Cloning $module..."
        rm -rf "$MODULE_PATH"
        git clone --depth 1 "${MODULES[$module]}" "$MODULE_PATH"
    else
        echo "$module already exists"
    fi
done

echo "=== Modules cloned successfully ==="
ls -la $MODULES_DIR/
