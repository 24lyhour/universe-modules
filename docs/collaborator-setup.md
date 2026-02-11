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

Here's the clone command for collaborators:

One Command (Clone with all submodules):

git clone --recurse-submodules https://github.com/24lyhour/universe-modules.git
Or step by step:

# 1. Clone main repo

git clone https://github.com/24lyhour/universe-modules.git

# 2. Enter directory

cd universe-modules

# 3. Initialize and download all submodules

git submodule update --init --recursive
After cloning, setup:

# Install dependencies

composer install
npm install

# Setup environment

cp .env.example .env
php artisan key:generate
php artisan migrate

# Start servers

php artisan serve
npm run dev
That's it! The `--recurse-submodules` flag automatically clones all 16 module repositories.

---

## Clone Single Module Only

If you only need one specific module:

```bash
# 1. Clone main repo (without submodules)
git clone https://github.com/24lyhour/universe-modules.git
cd universe-modules

# 2. Initialize only the module you need
git submodule update --init Modules/Customer

# 3. Regenerate autoload
composer dump-autoload

# 4. Enable the module
php artisan module:enable Customer

# 5. Run migrations
php artisan migrate

# 6. Verify module is enabled
php artisan module:list
```

---

## Git Commands Reference

| Command                                     | Description                  |
| ------------------------------------------- | ---------------------------- |
| `git init`                                  | Create new repository        |
| `git add .`                                 | Stage all changes            |
| `git commit -m "message"`                   | Commit changes               |
| `git push origin main`                      | Push to remote               |
| `git pull origin main`                      | Pull latest changes          |
| `git submodule update --init`               | Initialize all submodules    |
| `git submodule update --init Modules/Name`  | Initialize specific module   |
| `git pull && git submodule update --remote` | Pull all + update submodules |

Clone single module:

git clone https://github.com/24lyhour/universe-modules.git
cd universe-modules
git submodule update --init Modules/Customer # specific module
composer dump-autoload
php artisan module:enable Customer
php artisan migrate
php artisan module:list
Pull updates:

git pull && git submodule update --remote

Regarding your git push error - the remote repository has changes that you don't have locally. You need to pull first:

git pull origin master --rebase
Then push again. If there are conflicts, resolve them first.

For checking branches, you can use:

git branch -a # List all branches
git status # Check current branch status

# 1. Create separate repo for Menu module

# 2. Remove from parent: git rm -r --cached Modules/Menu

# 3. Add as submodule: git submodule add <repo-url> Modules/Menu
