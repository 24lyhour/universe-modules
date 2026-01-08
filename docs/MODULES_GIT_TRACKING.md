# Modules Git Tracking Guide

This guide explains how to properly track Laravel modules under the parent repository in VSCode.

## The Problem

When you create a new module or clone a module with its own `.git` folder, VSCode will:
- Show it as a **separate repository** in Source Control
- NOT show it under the **parent repository** (universe)

This happens because Git treats folders with `.git` as independent repositories.

## Solution: Remove `.git` from Modules

All modules should be tracked by the **parent repository only**.

### Step 1: Check for `.git` folders

```bash
# Check each module
ls -la Modules/Blog/.git
ls -la Modules/Hotel/.git
ls -la Modules/Porfolio/.git
ls -la Modules/Menu/.git
ls -la Modules/Customer/.git
```

If you see a `.git` folder, it needs to be removed.

### Step 2: Remove `.git` folders

```bash
# Remove .git from specific module
rm -rf Modules/{ModuleName}/.git

# Example: Remove from all modules at once
rm -rf Modules/Blog/.git
rm -rf Modules/Hotel/.git
rm -rf Modules/Porfolio/.git
rm -rf Modules/Menu/.git
rm -rf Modules/Customer/.git
```

### Step 3: Remove cached submodule references (if any)

```bash
git rm --cached Modules/{ModuleName} 2>/dev/null
```

### Step 4: Add module to parent repository

```bash
git add Modules/{ModuleName}/
git commit -m "Add {ModuleName} module"
```

### Step 5: Reload VSCode

Press `Cmd + Shift + P` → Type "Reload Window" → Enter

---

## Quick Command: Fix All Modules

Run this single command to fix all modules at once:

```bash
# Remove all .git folders from modules
rm -rf Modules/*/.git

# Remove any cached references
git rm --cached Modules/Blog Modules/Hotel Modules/Porfolio Modules/Menu Modules/Customer 2>/dev/null

# Add all modules
git add Modules/

# Commit
git commit -m "Track all modules under parent repository"
```

---

## Creating a New Module (Correct Way)

When creating a new module, follow these steps:

```bash
# 1. Generate module
php artisan module:make {ModuleName}

# 2. Check if .git was created (some generators do this)
ls -la Modules/{ModuleName}/.git

# 3. If .git exists, remove it
rm -rf Modules/{ModuleName}/.git

# 4. Add to parent repository
git add Modules/{ModuleName}/
git commit -m "Add {ModuleName} module"
```

---

## VSCode Source Control Behavior

### Important: Source Control only shows CHANGED files

| Scenario | What shows in Source Control |
|----------|------------------------------|
| File is tracked, no changes | Nothing (file won't appear) |
| File is tracked, has changes | Shows under repository with "M" |
| File is new/untracked | Shows under repository with "U" |
| File is deleted | Shows under repository with "D" |

**This is normal!** To see a file in Source Control, it must have uncommitted changes.

### How to search files

| Task | Shortcut | Where |
|------|----------|-------|
| Search all files by name | `Cmd + P` | Quick Open |
| Search file contents | `Cmd + Shift + F` | Search panel |
| View changed files | Click Source Control icon | Source Control panel |

---

## VSCode Settings

### Recommended settings for module development

Add to `.vscode/settings.json`:

```json
{
  "git.openRepositoryInParentFolders": "never",
  "git.repositoryScanMaxDepth": 1,
  "files.exclude": {
    "**/node_modules": true,
    "**/vendor": true
  }
}
```

### Setting explanations

| Setting | Value | Purpose |
|---------|-------|---------|
| `git.openRepositoryInParentFolders` | `"never"` | Don't auto-detect nested repos |
| `git.repositoryScanMaxDepth` | `1` | Only scan top-level for repos |

---

## Troubleshooting

### Problem: Module shows as separate repository

**Cause:** Module has its own `.git` folder

**Solution:**
```bash
rm -rf Modules/{ModuleName}/.git
# Reload VSCode
```

### Problem: Module files not appearing in `git status`

**Cause:** Module might be cached as submodule

**Solution:**
```bash
git rm --cached Modules/{ModuleName}
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
```

### Problem: "embedded git repository" warning

**Cause:** Adding a folder that contains `.git`

**Solution:**
```bash
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
```

### Problem: Can't see module in Source Control search

**Cause:** File has no changes (already committed)

**Solution:** This is normal! Source Control only shows changed files. Use `Cmd + P` to search all files.

---

## Verification

### Check if module is tracked correctly

```bash
# Should list all module files
git ls-files Modules/{ModuleName}/

# Should show module files in output
git ls-files Modules/Blog/app/Providers/
git ls-files Modules/Hotel/app/Providers/
git ls-files Modules/Porfolio/app/Providers/
git ls-files Modules/Menu/app/Providers/
```

### Check for any remaining .git folders

```bash
# Should return nothing if all .git folders are removed
find Modules -name ".git" -type d
```

Or manually check:
```bash
ls -la Modules/Blog/.git      # Should say "No such file or directory"
ls -la Modules/Hotel/.git     # Should say "No such file or directory"
ls -la Modules/Porfolio/.git  # Should say "No such file or directory"
ls -la Modules/Menu/.git      # Should say "No such file or directory"
```

---

## Summary

| Do | Don't |
|----|-------|
| Keep modules without `.git` folder | Keep `.git` inside modules |
| Track modules under parent repo | Create separate repos for each module |
| Use `rm -rf Modules/{Name}/.git` | Leave embedded `.git` folders |
| Reload VSCode after changes | Forget to reload VSCode |

---

## Current Modules Status

Run this to check your modules:

```bash
echo "=== Checking for .git folders ==="
for module in Modules/*/; do
  if [ -d "$module.git" ]; then
    echo "❌ $module has .git (REMOVE IT)"
  else
    echo "✅ $module OK"
  fi
done
```

Expected output (all OK):
```
✅ Modules/Blog/ OK
✅ Modules/Hotel/ OK
✅ Modules/Porfolio/ OK
✅ Modules/Menu/ OK
✅ Modules/Customer/ OK
```
