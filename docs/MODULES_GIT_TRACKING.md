# Modules Git Tracking Guide

This guide explains how to properly track Laravel modules under the parent repository in VSCode/Source Control.

## Table of Contents

- [Current Status](#current-status)
- [The Problem](#the-problem)
- [Solution](#solution)
- [Module Tracking Commands](#module-tracking-commands)
- [Creating New Modules](#creating-new-modules)
- [VSCode Configuration](#vscode-configuration)
- [Troubleshooting](#troubleshooting)
- [Verification Commands](#verification-commands)

---

## Current Status

All modules are now properly tracked in the main repository:

| Module | Controller | ServiceProvider | Status |
|--------|------------|-----------------|--------|
| Blog | `BlogController.php` | `BlogServiceProvider.php` | Tracked |
| Company | `CompanyController.php` | `CompanyServiceProvider.php` | Tracked |
| Customer | `CustomerController.php` | `CustomerServiceProvider.php` | Tracked |
| Hotel | `HotelController.php` | `HotelServiceProvider.php` | Tracked |
| Menu | `MenuController.php` | `MenuServiceProvider.php` | Tracked |
| Payment | `PaymentController.php` | `PaymentServiceProvider.php` | Tracked |
| Porfolio | `PorfolioController.php` | `PorfolioServiceProvider.php` | Tracked |
| Movice | `MoviceController.php` | `MoviceServiceProvider.php` | Tracked |

### Quick Status Check

```bash
# Check all tracked controllers
git ls-files "Modules/*/app/Http/Controllers/*.php"

# Check all tracked providers
git ls-files "Modules/*/app/Providers/*ServiceProvider.php"

# Check for any .git folders (should return nothing)
find Modules -name ".git" -type d 2>/dev/null
```

---

## The Problem

When modules have their own `.git` folder:

1. **VSCode shows them as separate repositories** in Source Control
2. **Files don't appear** when searching in the parent repository
3. **Git treats them as submodules** - only a reference is stored, not the actual files

### Symptoms

- Searching for `CustomerServiceProvider` doesn't show the controller
- Module appears as a single entry in `git status` instead of showing all files
- Source Control shows multiple repositories

---

## Solution

All modules should be tracked by the **parent repository only** (no `.git` folders inside modules).

### One-Time Fix for All Modules

```bash
# 1. Remove all .git folders from modules
rm -rf Modules/*/.git

# 2. Remove any cached submodule references
for module in Blog Company Customer Hotel Menu Payment Porfolio Movice; do
  git rm --cached "Modules/$module" 2>/dev/null
done

# 3. Add all module files to the parent repository
git add Modules/

# 4. Commit the changes
git commit -m "Track all modules under parent repository"
```

### Fix a Single Module

```bash
# Replace {ModuleName} with actual module name (e.g., Payment)

# 1. Remove .git folder
rm -rf Modules/{ModuleName}/.git

# 2. Remove cached reference if exists
git rm --cached Modules/{ModuleName} 2>/dev/null

# 3. Add module files
git add Modules/{ModuleName}/

# 4. Commit
git commit -m "Add {ModuleName} module to main repository"
```

---

## Module Tracking Commands

### List All Tracked Files in a Module

```bash
# All files in Blog module
git ls-files Modules/Blog/

# All files in Payment module
git ls-files Modules/Payment/

# Count files per module
for module in Blog Company Customer Hotel Menu Payment Porfolio Movice; do
  count=$(git ls-files "Modules/$module/" | wc -l | tr -d ' ')
  echo "$module: $count files"
done
```

### Check Module Tracking Status

```bash
# Check if module is tracked as directory (correct) or submodule (wrong)
for module in Blog Company Customer Hotel Menu Payment Porfolio Movice; do
  if git ls-files --stage "Modules/$module" 2>/dev/null | grep -q "160000"; then
    echo "$module: SUBMODULE (needs fixing)"
  else
    echo "$module: OK (tracked as directory)"
  fi
done
```

### View Specific Files

```bash
# List all controllers
git ls-files "Modules/*/app/Http/Controllers/*.php"

# List all service providers
git ls-files "Modules/*/app/Providers/*ServiceProvider.php"

# List all models
git ls-files "Modules/*/app/Models/*.php"

# List all routes
git ls-files "Modules/*/routes/*.php"

# List all migrations
git ls-files "Modules/*/database/migrations/*.php"
```

---

## Creating New Modules

When creating a new module, follow these steps to ensure proper tracking:

### Step 1: Generate the Module

```bash
php artisan module:make {ModuleName}
```

### Step 2: Check for .git Folder

```bash
ls -la Modules/{ModuleName}/.git
```

### Step 3: Remove .git if Present

```bash
rm -rf Modules/{ModuleName}/.git
```

### Step 4: Add to Repository

```bash
git add Modules/{ModuleName}/
git commit -m "feat({ModuleName}): add {ModuleName} module"
```

### Complete Example: Creating a Branch Module

```bash
# 1. Generate module
php artisan module:make Branch

# 2. Remove .git if created
rm -rf Modules/Branch/.git

# 3. Generate additional components
php artisan module:make-model Branch Branch -mf
php artisan module:make-service BranchService Branch
php artisan module:make-repository BranchRepository Branch

# 4. Add to git
git add Modules/Branch/
git commit -m "feat(Branch): add Branch module with model, service, and repository"
```

---

## VSCode Configuration

### Recommended Settings

Add to `.vscode/settings.json`:

```json
{
  "git.openRepositoryInParentFolders": "never",
  "git.repositoryScanMaxDepth": 1,
  "files.exclude": {
    "**/node_modules": true,
    "**/vendor": true
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/vendor": true,
    "**/.git": true
  }
}
```

### Setting Explanations

| Setting | Value | Purpose |
|---------|-------|---------|
| `git.openRepositoryInParentFolders` | `"never"` | Prevents auto-detection of nested repos |
| `git.repositoryScanMaxDepth` | `1` | Only scans top-level for repositories |
| `files.exclude` | `{...}` | Hides unnecessary folders in file explorer |
| `search.exclude` | `{...}` | Excludes folders from search results |

### Useful Shortcuts

| Task | Shortcut | Description |
|------|----------|-------------|
| Search files by name | `Cmd + P` | Quick Open - find any file |
| Search file contents | `Cmd + Shift + F` | Search across all files |
| Go to Symbol | `Cmd + Shift + O` | Find classes, methods in current file |
| Go to Definition | `F12` | Jump to function/class definition |
| View Source Control | `Ctrl + Shift + G` | Open Source Control panel |

---

## Troubleshooting

### Problem: Module shows as separate repository

**Cause:** Module has its own `.git` folder

**Solution:**
```bash
rm -rf Modules/{ModuleName}/.git
# Reload VSCode: Cmd + Shift + P → "Reload Window"
```

### Problem: Module files not appearing in `git status`

**Cause:** Module is cached as a submodule reference

**Solution:**
```bash
git rm --cached Modules/{ModuleName}
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
git commit -m "Fix {ModuleName} module tracking"
```

### Problem: "embedded git repository" warning

**Cause:** Trying to add a folder that contains `.git`

**Solution:**
```bash
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
```

### Problem: Can't find controller when searching ServiceProvider

**Cause:**
1. Module might be a submodule (files not tracked)
2. Files are tracked but have no changes (won't appear in Source Control)

**Solution:**
```bash
# Check if files are tracked
git ls-files "Modules/{ModuleName}/app/Http/Controllers/"

# If empty, fix the module tracking
git rm --cached Modules/{ModuleName} 2>/dev/null
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
```

### Problem: Source Control doesn't show module files

**Cause:** Source Control only shows CHANGED files, not all tracked files

**Solution:** This is normal behavior. Use these methods instead:

| To Do This | Use This |
|------------|----------|
| Find any file | `Cmd + P` |
| Search file contents | `Cmd + Shift + F` |
| See all tracked files | `git ls-files Modules/` |
| See changed files only | `git status` or Source Control panel |

---

## Verification Commands

### Full Module Tracking Verification

```bash
echo "=== Module Tracking Verification ==="
echo ""

echo "1. Checking for .git folders (should be empty):"
find Modules -name ".git" -type d 2>/dev/null || echo "   None found (OK)"
echo ""

echo "2. Files tracked per module:"
for module in Blog Company Customer Hotel Menu Payment Porfolio Movice; do
  count=$(git ls-files "Modules/$module/" 2>/dev/null | wc -l | tr -d ' ')
  if [ "$count" -gt "0" ]; then
    echo "   $module: $count files (OK)"
  else
    echo "   $module: $count files (PROBLEM)"
  fi
done
echo ""

echo "3. Controllers tracked:"
git ls-files "Modules/*/app/Http/Controllers/*.php" | while read file; do
  echo "   $file"
done
echo ""

echo "4. ServiceProviders tracked:"
git ls-files "Modules/*/app/Providers/*ServiceProvider.php" | while read file; do
  echo "   $file"
done
```

### Quick Health Check

```bash
# One-liner to verify all modules are OK
for m in Blog Company Customer Hotel Menu Payment Porfolio Movice; do
  [ -d "Modules/$m/.git" ] && echo "$m: HAS .git (BAD)" || echo "$m: OK"
done
```

Expected output:
```
Blog: OK
Company: OK
Customer: OK
Hotel: OK
Menu: OK
Payment: OK
Porfolio: OK
Movice: OK
```

---

## Summary

### Do's and Don'ts

| Do | Don't |
|----|-------|
| Keep modules without `.git` folder | Keep `.git` inside modules |
| Track modules under parent repo | Create separate repos for each module |
| Use `rm -rf Modules/{Name}/.git` | Leave embedded `.git` folders |
| Use `git ls-files` to verify tracking | Rely only on Source Control panel |
| Reload VSCode after git changes | Forget to reload VSCode |

### Key Commands Reference

```bash
# Remove .git from module
rm -rf Modules/{ModuleName}/.git

# Remove cached submodule reference
git rm --cached Modules/{ModuleName}

# Add module to main repo
git add Modules/{ModuleName}/

# List tracked files
git ls-files Modules/{ModuleName}/

# Check for .git folders
find Modules -name ".git" -type d

# Verify controller is tracked
git ls-files "Modules/{ModuleName}/app/Http/Controllers/"
```

---

## File Locations Reference

| File Type | Path Pattern |
|-----------|--------------|
| Controllers | `Modules/{Module}/app/Http/Controllers/{Module}Controller.php` |
| Models | `Modules/{Module}/app/Models/{Model}.php` |
| ServiceProviders | `Modules/{Module}/app/Providers/{Module}ServiceProvider.php` |
| Routes (Web) | `Modules/{Module}/routes/web.php` |
| Routes (API) | `Modules/{Module}/routes/api.php` |
| Migrations | `Modules/{Module}/database/migrations/*.php` |
| Config | `Modules/{Module}/config/config.php` |
| Views | `Modules/{Module}/resources/views/*.blade.php` |
| Services | `Modules/{Module}/app/Services/{Service}Service.php` |
| Repositories | `Modules/{Module}/app/Repositories/{Repository}Repository.php` |
