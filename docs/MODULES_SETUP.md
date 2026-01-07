# Laravel Modules Setup Guide

This guide explains how to set up Laravel modules with the **Repository Pattern** and proper Git tracking under the parent repository.

## Table of Contents

1. [Module Structure](#module-structure)
2. [Repository Pattern Architecture](#repository-pattern-architecture)
3. [Creating a New Module](#creating-a-new-module)
4. [Git Setup for Modules](#git-setup-for-modules)
5. [Troubleshooting](#troubleshooting)

---

## Module Structure

Each module follows this structure:

```
Modules/{ModuleName}/
├── app/
│   ├── Contracts/
│   │   └── {Entity}RepositoryInterface.php    # Interface/Contract
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── {Module}Controller.php         # Controller
│   │   └── Requests/
│   │       ├── Store{Entity}Request.php       # Create validation
│   │       └── Update{Entity}Request.php      # Update validation
│   ├── Models/
│   │   └── {Entity}.php                       # Eloquent Model
│   ├── Providers/
│   │   ├── {Module}ServiceProvider.php        # Main service provider
│   │   ├── EventServiceProvider.php
│   │   └── RouteServiceProvider.php
│   ├── Repositories/
│   │   └── {Entity}Repository.php             # Repository implementation
│   └── Services/
│       └── {Entity}Service.php                # Business logic
├── config/
│   └── config.php
├── database/
│   ├── factories/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── assets/
│   └── views/
├── routes/
│   ├── api.php
│   └── web.php
├── tests/
├── composer.json
├── module.json
└── package.json
```

---

## Repository Pattern Architecture

The repository pattern separates data access logic from business logic:

```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐     ┌─────────┐     ┌──────────┐
│  Controller │ ──▶ │   Service   │ ──▶ │  Repository  │ ──▶ │  Model  │ ──▶ │ Database │
└─────────────┘     └─────────────┘     └──────────────┘     └─────────┘     └──────────┘
       │                   │                    │
       ▼                   ▼                    ▼
   HTTP Request      Business Logic       Data Access
   Validation        Slug generation      CRUD operations
   Response          Authorization        Query building
```

### Benefits

- **Separation of Concerns** - Each layer has a single responsibility
- **Testability** - Easy to mock repositories for unit tests
- **Flexibility** - Can swap implementations (e.g., API instead of database)
- **Maintainability** - Business logic isolated in service layer

---

## Creating a New Module

### Step 1: Generate Module

```bash
php artisan module:make {ModuleName}
```

### Step 2: Create Model

Create `Modules/{ModuleName}/app/Models/{Entity}.php`:

```php
<?php

namespace Modules\{ModuleName}\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class {Entity} extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'title',
        'slug',
        // ... other fields
        'status',
    ];

    protected $casts = [
        // Define casts here
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Add scopes as needed
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}
```

### Step 3: Create Repository Interface

Create `Modules/{ModuleName}/app/Contracts/{Entity}RepositoryInterface.php`:

```php
<?php

namespace Modules\{ModuleName}\Contracts;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Modules\{ModuleName}\Models\{Entity};

interface {Entity}RepositoryInterface
{
    public function all(): Collection;

    public function paginate(int $perPage = 15): LengthAwarePaginator;

    public function find(int $id): ?{Entity};

    public function findBySlug(string $slug): ?{Entity};

    public function create(array $data): {Entity};

    public function update(int $id, array $data): bool;

    public function delete(int $id): bool;
}
```

### Step 4: Create Repository Implementation

Create `Modules/{ModuleName}/app/Repositories/{Entity}Repository.php`:

```php
<?php

namespace Modules\{ModuleName}\Repositories;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Modules\{ModuleName}\Contracts\{Entity}RepositoryInterface;
use Modules\{ModuleName}\Models\{Entity};

class {Entity}Repository implements {Entity}RepositoryInterface
{
    public function __construct(
        protected {Entity} $model
    ) {}

    public function all(): Collection
    {
        return $this->model->with('user')->latest()->get();
    }

    public function paginate(int $perPage = 15): LengthAwarePaginator
    {
        return $this->model->with('user')->latest()->paginate($perPage);
    }

    public function find(int $id): ?{Entity}
    {
        return $this->model->with('user')->find($id);
    }

    public function findBySlug(string $slug): ?{Entity}
    {
        return $this->model->with('user')->where('slug', $slug)->first();
    }

    public function create(array $data): {Entity}
    {
        return $this->model->create($data);
    }

    public function update(int $id, array $data): bool
    {
        $entity = $this->find($id);
        if (! $entity) {
            return false;
        }
        return $entity->update($data);
    }

    public function delete(int $id): bool
    {
        $entity = $this->find($id);
        if (! $entity) {
            return false;
        }
        return $entity->delete();
    }
}
```

### Step 5: Create Service

Create `Modules/{ModuleName}/app/Services/{Entity}Service.php`:

```php
<?php

namespace Modules\{ModuleName}\Services;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;
use Modules\{ModuleName}\Contracts\{Entity}RepositoryInterface;
use Modules\{ModuleName}\Models\{Entity};

class {Entity}Service
{
    public function __construct(
        protected {Entity}RepositoryInterface $repository
    ) {}

    public function getAll(): Collection
    {
        return $this->repository->all();
    }

    public function getPaginated(int $perPage = 15): LengthAwarePaginator
    {
        return $this->repository->paginate($perPage);
    }

    public function getById(int $id): ?{Entity}
    {
        return $this->repository->find($id);
    }

    public function create(array $data): {Entity}
    {
        $data['slug'] = $this->generateUniqueSlug($data['title']);
        $data['user_id'] = auth()->id();

        return $this->repository->create($data);
    }

    public function update(int $id, array $data): bool
    {
        if (isset($data['title'])) {
            $entity = $this->repository->find($id);
            if ($entity && $entity->title !== $data['title']) {
                $data['slug'] = $this->generateUniqueSlug($data['title'], $id);
            }
        }
        return $this->repository->update($id, $data);
    }

    public function delete(int $id): bool
    {
        return $this->repository->delete($id);
    }

    protected function generateUniqueSlug(string $title, ?int $excludeId = null): string
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (true) {
            $existing = $this->repository->findBySlug($slug);
            if (! $existing || ($excludeId && $existing->id === $excludeId)) {
                break;
            }
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
```

### Step 6: Create Form Requests

Create `Modules/{ModuleName}/app/Http/Requests/Store{Entity}Request.php`:

```php
<?php

namespace Modules\{ModuleName}\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Store{Entity}Request extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            // ... other validation rules
            'status' => ['required', 'in:draft,published,active,inactive'],
        ];
    }
}
```

Create `Modules/{ModuleName}/app/Http/Requests/Update{Entity}Request.php`:

```php
<?php

namespace Modules\{ModuleName}\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Update{Entity}Request extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            // ... other validation rules
            'status' => ['sometimes', 'required', 'in:draft,published,active,inactive'],
        ];
    }
}
```

### Step 7: Update Service Provider

Edit `Modules/{ModuleName}/app/Providers/{ModuleName}ServiceProvider.php`:

```php
<?php

namespace Modules\{ModuleName}\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;
use Modules\{ModuleName}\Contracts\{Entity}RepositoryInterface;
use Modules\{ModuleName}\Repositories\{Entity}Repository;
// ... other imports

class {ModuleName}ServiceProvider extends ServiceProvider
{
    // ... existing code

    public function register(): void
    {
        $this->app->register(EventServiceProvider::class);
        $this->app->register(RouteServiceProvider::class);

        $this->registerRepositories();
    }

    protected function registerRepositories(): void
    {
        $this->app->bind({Entity}RepositoryInterface::class, {Entity}Repository::class);
    }

    // ... rest of existing code
}
```

### Step 8: Update Controller

Edit `Modules/{ModuleName}/app/Http/Controllers/{ModuleName}Controller.php`:

```php
<?php

namespace Modules\{ModuleName}\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Modules\{ModuleName}\Http\Requests\Store{Entity}Request;
use Modules\{ModuleName}\Http\Requests\Update{Entity}Request;
use Modules\{ModuleName}\Services\{Entity}Service;

class {ModuleName}Controller extends Controller
{
    public function __construct(
        protected {Entity}Service $service
    ) {}

    public function index(): Response
    {
        $items = $this->service->getPaginated();
        return Inertia::render('{modulename}::Index', ['items' => $items]);
    }

    public function create(): Response
    {
        return Inertia::render('{modulename}::Create');
    }

    public function store(Store{Entity}Request $request): RedirectResponse
    {
        $this->service->create($request->validated());
        return redirect()->route('{modulename}.index')->with('success', 'Created successfully.');
    }

    public function show(int $id): Response
    {
        $item = $this->service->getById($id);
        if (! $item) {
            abort(404);
        }
        return Inertia::render('{modulename}::Show', ['item' => $item]);
    }

    public function edit(int $id): Response
    {
        $item = $this->service->getById($id);
        if (! $item) {
            abort(404);
        }
        return Inertia::render('{modulename}::Edit', ['item' => $item]);
    }

    public function update(Update{Entity}Request $request, int $id): RedirectResponse
    {
        $updated = $this->service->update($id, $request->validated());
        if (! $updated) {
            abort(404);
        }
        return redirect()->route('{modulename}.index')->with('success', 'Updated successfully.');
    }

    public function destroy(int $id): RedirectResponse
    {
        $deleted = $this->service->delete($id);
        if (! $deleted) {
            abort(404);
        }
        return redirect()->route('{modulename}.index')->with('success', 'Deleted successfully.');
    }
}
```

### Step 9: Create Migration

Create `Modules/{ModuleName}/database/migrations/{timestamp}_create_{table}_table.php`:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('{table}', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            // ... other columns
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->timestamps();
            $table->softDeletes();

            $table->index(['status']);
            $table->index(['user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('{table}');
    }
};
```

### Step 10: Run Migration

```bash
php artisan migrate
```

---

## Git Setup for Modules

### Important: Modules Under Parent Repository

All modules should be tracked by the **parent repository** (universe), NOT as separate Git repositories.

### If Module Has Its Own .git Folder (Problem)

When a module has its own `.git` folder, Git treats it as a submodule and won't track its files:

```bash
# Check if .git exists
ls -la Modules/{ModuleName}/.git

# If it exists, remove it
rm -rf Modules/{ModuleName}/.git
```

### Correct Setup Steps

1. **Remove .git folders from all modules:**

```bash
rm -rf Modules/Blog/.git
rm -rf Modules/Hotel/.git
rm -rf Modules/Porfolio/.git
rm -rf Modules/Customer/.git
# Repeat for any other modules
```

2. **Remove any cached submodule references:**

```bash
git rm --cached Modules/Blog 2>/dev/null
git rm --cached Modules/Hotel 2>/dev/null
git rm --cached Modules/Porfolio 2>/dev/null
git rm --cached Modules/Customer 2>/dev/null
```

3. **Add modules to parent repository:**

```bash
git add Modules/
git status
```

4. **Verify all files are listed:**

You should see all module files listed as new files:
```
new file:   Modules/Blog/app/Providers/BlogServiceProvider.php
new file:   Modules/Blog/app/Models/Post.php
new file:   Modules/Hotel/app/Providers/HotelServiceProvider.php
...
```

5. **Commit:**

```bash
git commit -m "Add all modules with repository pattern"
```

### VSCode Source Control

After proper setup, when you search for `BlogServiceProvider` in VSCode:

- It should show under **universe (main)** branch
- NOT as a separate repository

### .gitignore Configuration

Make sure your `.gitignore` does **NOT** contain `/Modules/*/`:

```gitignore
# WRONG - This ignores all modules
/Modules/*/

# CORRECT - Modules should NOT be ignored
# (just don't add /Modules/*/ to .gitignore)
```

---

## Troubleshooting

### Problem: Module files not showing in git status

**Cause:** Module has its own `.git` folder

**Solution:**
```bash
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
```

### Problem: "embedded git repository" warning

**Cause:** Adding a folder that contains `.git`

**Solution:**
```bash
git rm --cached Modules/{ModuleName}
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
```

### Problem: Module shows as separate repo in VSCode

**Cause:** Module has `.git` folder and VSCode settings detect nested repos

**Solution:**
1. Remove `.git` folder from module
2. Or change VSCode setting: `"git.openRepositoryInParentFolders": "never"`

### Problem: Changes not tracked after editing module files

**Cause:** Module might still have `.git` folder

**Solution:**
```bash
# Check
ls -la Modules/{ModuleName}/.git

# Remove if exists
rm -rf Modules/{ModuleName}/.git

# Re-add
git add Modules/{ModuleName}/
```

---

## Quick Reference

### Create New Module with Repository Pattern

```bash
# 1. Generate module
php artisan module:make {ModuleName}

# 2. Create folders
mkdir -p Modules/{ModuleName}/app/Contracts
mkdir -p Modules/{ModuleName}/app/Repositories
mkdir -p Modules/{ModuleName}/app/Services
mkdir -p Modules/{ModuleName}/app/Models
mkdir -p Modules/{ModuleName}/app/Http/Requests

# 3. Create files (follow templates above)
# - Model
# - RepositoryInterface
# - Repository
# - Service
# - StoreRequest
# - UpdateRequest
# - Migration

# 4. Update ServiceProvider with repository binding

# 5. Update Controller to use Service

# 6. Run migration
php artisan migrate

# 7. Add to Git (make sure no .git in module)
rm -rf Modules/{ModuleName}/.git
git add Modules/{ModuleName}/
git commit -m "Add {ModuleName} module with repository pattern"
```

---

## Existing Modules in This Project

| Module | Entity | Status |
|--------|--------|--------|
| Blog | Post | ✅ Complete |
| Hotel | Hotel | ✅ Complete |
| Porfolio | Portfolio | ✅ Complete |
| Customer | Customer | Pending |

---

## Author

Generated with Claude Code
