# Collaborator & Team Setup Guide

This guide explains how to clone and set up the Universe project with all its module submodules.

## Quick Start

### Clone with All Submodules (Recommended)

```bash
# Clone the main repo with all submodules in one command
git clone --recurse-submodules https://github.com/24lyhour/universe-modules.git

# Navigate to project
cd universe-modules
```

### If You Already Cloned Without Submodules

```bash
# Initialize and update all submodules
git submodule update --init --recursive
```

## Detailed Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/24lyhour/universe-modules.git
cd universe-modules
```

### Step 2: Initialize Submodules

```bash
# Initialize submodule configuration
git submodule init

# Clone all submodule repositories
git submodule update
```

### Step 3: Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed
```

### Step 4: Start Development Server

```bash
# Start Laravel server
php artisan serve

# In another terminal, start Vite
npm run dev
```

## Module Submodules

The project contains the following module submodules:

| Module   | Repository                                                                         |
| -------- | ---------------------------------------------------------------------------------- |
| Blog     | [universe-modules-Blog](https://github.com/24lyhour/universe-modules-Blog)         |
| Booking  | [universe-modules-Booking](https://github.com/24lyhour/universe-modules-Booking)   |
| Company  | [universe-modules-Company](https://github.com/24lyhour/universe-modules-Company)   |
| Customer | [universe-modules-Customer](https://github.com/24lyhour/universe-modules-Customer) |
| Hotel    | [universe-modules-Hotel](https://github.com/24lyhour/universe-modules-Hotel)       |
| Media    | [universe-modules-Media](https://github.com/24lyhour/universe-modules-Media)       |
| Menu     | [universe-modules-Menu](https://github.com/24lyhour/universe-modules-Menu)         |
| Movice   | [universe-modules-Movice](https://github.com/24lyhour/universe-modules-Movice)     |
| Order    | [universe-modules-Order](https://github.com/24lyhour/universe-modules-Order)       |
| Outlet   | [universe-modules-Outlet](https://github.com/24lyhour/universe-modules-Outlet)     |
| Payment  | [universe-modules-Payment](https://github.com/24lyhour/universe-modules-Payment)   |
| Porfolio | [universe-modules-Porfolio](https://github.com/24lyhour/universe-modules-Porfolio) |
| Product  | [universe-modules-Product](https://github.com/24lyhour/universe-modules-Product)   |
| Report   | [universe-modules-Report](https://github.com/24lyhour/universe-modules-Report)     |
| School   | [universe-modules-School](https://github.com/24lyhour/universe-modules-School)     |
| Wallets  | [universe-modules-Wallets](https://github.com/24lyhour/universe-modules-Wallets)   |

## Working with Submodules

### Pull Latest Changes (All Repos)

```bash
# Pull main repo changes
git pull origin main

# Update all submodules to latest
git submodule update --remote --merge
```

### Pull Latest for a Specific Module

```bash
cd Modules/Customer
git pull origin main
cd ../..
```

### Making Changes to a Module

```bash
# Navigate to the module
cd Modules/Customer

# Create a new branch
git checkout -b feature/new-feature

# Make your changes...

# Commit changes
git add .
git commit -m "feat: Add new feature"

# Push to module repo
git push origin feature/new-feature

# Go back to main repo
cd ../..

# Update the submodule reference in main repo
git add Modules/Customer
git commit -m "chore: Update Customer module reference"
git push origin main
```

### Check Submodule Status

```bash
# See status of all submodules
git submodule status

# See detailed status
git submodule foreach 'git status'
```

### Update All Submodules to Latest

```bash
# Fetch and merge latest from all submodule remotes
git submodule update --remote --merge

# Or reset to the exact commits referenced in main repo
git submodule update --init --recursive
```

## Common Issues

### Submodule Directory is Empty

```bash
# Run this to populate empty submodule directories
git submodule update --init --recursive
```

### Detached HEAD in Submodule

```bash
cd Modules/ModuleName
git checkout main
git pull origin main
```

### Submodule Has Local Changes

```bash
cd Modules/ModuleName
git stash  # Save changes
git checkout main
git pull origin main
git stash pop  # Restore changes
```

## Team Workflow

### For Team Members

1. **Clone once** with `--recurse-submodules`
2. **Pull updates** with `git pull && git submodule update --remote`
3. **Work on modules** by cd-ing into them and making commits
4. **Push module changes** first, then update main repo

### For Module Maintainers

1. **Make changes** in the module directory
2. **Commit and push** to the module repo
3. **Update main repo** to reference new commit
4. **Push main repo** so team gets the update

## Environment Setup

### Required Software

- PHP 8.2+
- Composer 2.x
- Node.js 18+
- npm or yarn
- MySQL 8.0+ or PostgreSQL 14+
- Git 2.x

### VS Code Extensions (Recommended)

- Laravel Extension Pack
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense
- GitLens

## Scripts Reference

```bash
# Development
npm run dev          # Start Vite dev server
php artisan serve    # Start Laravel server

# Build
npm run build        # Build for production

# Testing
php artisan test     # Run tests
npm run lint         # Lint frontend code

# Database
php artisan migrate              # Run migrations
php artisan migrate:fresh --seed # Fresh database with seeds
php artisan db:seed              # Run seeders

# Modules
php artisan module:list          # List all modules
php artisan module:enable Blog   # Enable a module
php artisan module:disable Blog  # Disable a module
```

---

## Git CLI Quick Reference

### 1. Clone Parent + Submodules

```bash
# Option A: One command (Recommended)
git clone --recurse-submodules https://github.com/24lyhour/universe.git
cd universe

# Option B: Step by step
git clone https://github.com/24lyhour/universe.git
cd universe
git submodule update --init --recursive
```

### 2. Commit to Submodule (e.g., Menu)

```bash
# Step 1: Go to submodule
cd Modules/Menu

# Step 2: Create branch & make changes
git checkout -b feature/my-feature
# ... edit files ...

# Step 3: Commit in submodule
git add .
git commit -m "feat: Add new feature"

# Step 4: Push submodule
git push origin feature/my-feature
# (Create PR, merge to main)

# Step 5: After merge, switch to main
git checkout main
git pull origin main
```

### 3. Update Parent to Track New Submodule Commit

```bash
# Step 1: Go back to parent
cd ../..   # or: cd /path/to/universe

# Step 2: Parent now sees submodule changed
git status
# Output: modified: Modules/Menu (new commits)

# Step 3: Stage and commit the submodule reference
git add Modules/Menu
git commit -m "chore: Update Menu module to latest"

# Step 4: Push parent
git push origin main
```

### Complete Flow Example

```bash
# 1. Clone everything
git clone --recurse-submodules https://github.com/24lyhour/universe.git
cd universe

# 2. Work on Menu module
cd Modules/Menu
git checkout -b feature/add-validation
# ... make changes to files ...
git add .
git commit -m "feat: Add form validation"
git push origin feature/add-validation

# 3. After PR merged, update local
git checkout main
git pull origin main

# 4. Update parent reference
cd ../..
git add Modules/Menu
git commit -m "chore: Update Menu module"
git push origin main
```

### Clone Specific Modules Only (2-3 modules)

```bash
# 1. Clone parent (without any submodules)
git clone https://github.com/24lyhour/universe.git
cd universe

# 2. Initialize only the modules you need
git submodule update --init Modules/Menu
git submodule update --init Modules/Product
git submodule update --init Modules/Outlet

# 3. Setup Laravel
composer dump-autoload
php artisan module:enable Menu
php artisan module:enable Product
php artisan module:enable Outlet
php artisan migrate
```

### One-liner for Multiple Specific Modules

```bash
# Clone parent
git clone https://github.com/24lyhour/universe.git && cd universe

# Init multiple modules at once
git submodule update --init Modules/Menu Modules/Product Modules/Outlet

# Enable them
php artisan module:enable Menu Product Outlet
```

### Clone Single Module Only

```bash
git clone https://github.com/24lyhour/universe.git
cd universe
git submodule update --init Modules/Menu    # Only Menu module
composer dump-autoload
php artisan module:enable Menu
php artisan migrate
```

### Add More Modules Later

```bash
# Already cloned with some modules, want to add Customer
git submodule update --init Modules/Customer
composer dump-autoload
php artisan module:enable Customer
php artisan migrate
```

### Daily Workflow

```bash
# Pull latest (main + all submodules)
git pull && git submodule update --remote --merge

# Check status
git status                              # Main repo status
git submodule status                    # All submodules status
git submodule foreach 'git status'      # Detailed status each
```

### Working on a Module

```bash
# 1. Go to module
cd Modules/Menu

# 2. Make sure you're on main branch
git checkout main
git pull origin main

# 3. Create feature branch
git checkout -b feature/add-validation

# 4. Make changes, then commit
git add .
git commit -m "feat: Add form validation"

# 5. Push to module repo
git push origin feature/add-validation

# 6. After PR merged, update parent repo
cd ../..
git add Modules/Menu
git commit -m "chore: Update Menu module"
git push origin main
```

### Git Commands Table

| Command                                        | Description                   |
| ---------------------------------------------- | ----------------------------- |
| `git clone --recurse-submodules <url>`         | Clone with all submodules     |
| `git submodule update --init --recursive`      | Initialize all submodules     |
| `git submodule update --init Modules/Name`     | Initialize specific module    |
| `git submodule update --remote --merge`        | Update submodules to latest   |
| `git submodule status`                         | Show submodule commit hashes  |
| `git submodule foreach 'git status'`           | Run command in each submodule |
| `git submodule foreach 'git pull origin main'` | Pull all submodules           |

### Fix Common Issues

```bash
# Empty submodule directory
git submodule update --init --recursive

# Detached HEAD in submodule
cd Modules/Menu
git checkout main
git pull origin main

# Discard submodule changes
cd Modules/Menu
git checkout .
git clean -fd

# Reset submodule to parent's reference
git submodule update --force Modules/Menu
```

### After Cloning - Setup

```bash
# Install dependencies
composer install
npm install

# Setup environment
cp .env.example .env
php artisan key:generate
php artisan migrate

# Start development
php artisan serve    # Terminal 1
npm run dev          # Terminal 2
```

### how collaborators can clone only specific modules:

Clone Parent + Only 2-3 Specific Modules:

# 1. Clone parent (no submodules yet)

git clone https://github.com/24lyhour/universe.git
cd universe

# 2. Init only the modules they need

git submodule update --init Modules/Menu Modules/Product Modules/Outlet

# 3. Enable modules

composer dump-autoload
php artisan module:enable Menu Product Outlet
php artisan migrate
One-liner version:

git clone https://github.com/24lyhour/universe.git && cd universe && \
git submodule update --init Modules/Menu Modules/Product Modules/Outlet
Add more modules later:

git submodule update --init Modules/Customer
php artisan module:enable Customer
This way:

Collaborators don't download all 16 modules
Only get the modules they need to work on
Can add more modules anytime
