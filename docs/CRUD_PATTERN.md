# CRUD Pattern Implementation Guide

This document explains the standard CRUD (Create, Read, Update, Delete) pattern used in this Laravel + Inertia.js + Vue 3 project with modular architecture.

## Overview

The project follows a consistent pattern for implementing CRUD functionality across all modules:

```
Module/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── ModuleController.php        # CRUD only (index, create, store, show, edit, update, destroy)
│   │   │   ├── ModuleStatusController.php  # Status actions (activate, deactivate, suspend)
│   │   │   ├── ModuleSecurityController.php # Security actions (verify, 2FA)
│   │   │   └── Api/
│   │   │       ├── ModuleApiController.php       # API CRUD + stats/search
│   │   │       └── ModuleStatusApiController.php # API status actions
│   │   ├── Requests/
│   │   │   ├── StoreModuleRequest.php    # Validation for create
│   │   │   └── UpdateModuleRequest.php   # Validation for update
│   │   └── Resources/
│   │       └── ModuleResource.php        # API Resource for data transformation
│   ├── Models/
│   │   └── Module.php                    # Eloquent model
│   └── Services/
│       └── ModuleService.php             # Business logic layer
├── database/
│   ├── factories/
│   │   └── ModuleFactory.php             # Factory for testing/seeding
│   ├── migrations/
│   │   └── xxx_create_modules_table.php
│   └── seeders/
│       └── ModuleSeeder.php              # Database seeder
├── resources/js/pages/dashboard/module/
│   ├── Index.vue                         # List page with TableReusable
│   ├── Create.vue                        # Create modal (momentum-modal)
│   ├── Edit.vue                          # Edit modal (momentum-modal)
│   ├── Show.vue                          # Detail page
│   └── components/
│       └── ModuleForm.vue                # Reusable form component
└── routes/
    ├── dashboard.php                     # Web routes
    └── api.php                           # API routes
```

### Controller Separation Principle

Keep controllers focused on a single responsibility:

| Controller | Responsibility | Methods |
|------------|----------------|---------|
| `ModuleController` | CRUD operations | index, create, store, show, edit, update, destroy |
| `ModuleStatusController` | Status changes | activate, deactivate, suspend |
| `ModuleSecurityController` | Security actions | verifyEmail, enableTwoFactor, disableTwoFactor |

---

## Backend Implementation

### 1. Model (`app/Models/Module.php`)

```php
<?php

namespace Modules\ModuleName\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\ModuleName\Database\Factories\ModuleFactory;

class Module extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'status',
        // ... other fields
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
            'created_at' => 'datetime',
        ];
    }

    // Scopes
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    // Factory
    protected static function newFactory(): ModuleFactory
    {
        return ModuleFactory::new();
    }
}
```

### 2. Service Layer (`app/Services/ModuleService.php`)

```php
<?php

namespace Modules\ModuleName\Services;

use Modules\ModuleName\Models\Module;
use Illuminate\Pagination\LengthAwarePaginator;

class ModuleService
{
    public function paginate(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = Module::query();

        if (!empty($filters['search'])) {
            $query->where('name', 'like', "%{$filters['search']}%");
        }

        if (!empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        return $query->latest()->paginate($perPage);
    }

    public function create(array $data): Module
    {
        return Module::create($data);
    }

    public function update(Module $module, array $data): Module
    {
        $module->update($data);
        return $module->fresh();
    }

    public function delete(Module $module): bool
    {
        return $module->delete();
    }

    public function getStats(): array
    {
        return [
            'total' => Module::count(),
            'active' => Module::where('status', 'active')->count(),
            'inactive' => Module::where('status', 'inactive')->count(),
        ];
    }
}
```

### 3. Controller (`app/Http/Controllers/ModuleController.php`)

```php
<?php

namespace Modules\ModuleName\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Modules\ModuleName\Http\Requests\StoreModuleRequest;
use Modules\ModuleName\Http\Requests\UpdateModuleRequest;
use Modules\ModuleName\Http\Resources\ModuleResource;
use Modules\ModuleName\Models\Module;
use Modules\ModuleName\Services\ModuleService;
use Momentum\Modal\Modal;

class ModuleController extends Controller
{
    public function __construct(
        protected ModuleService $moduleService
    ) {}

    // List page (regular Inertia page)
    public function index(Request $request): Response
    {
        $filters = $request->only(['status', 'search']);
        $modules = $this->moduleService->paginate(
            perPage: $request->integer('per_page', 15),
            filters: $filters
        );

        return Inertia::render('modulename::dashboard/module/Index', [
            'modules' => ModuleResource::collection($modules),
            'filters' => $filters,
            'stats' => $this->moduleService->getStats(),
        ]);
    }

    // Create modal (momentum-modal)
    public function create(): Modal
    {
        return Inertia::modal('modulename::dashboard/module/Create')
            ->baseRoute('modulename.modules.index');
    }

    public function store(StoreModuleRequest $request)
    {
        $this->moduleService->create($request->validated());

        return redirect()->route('modulename.modules.index')
            ->with('success', 'Module created successfully.');
    }

    // Show page (regular Inertia page)
    public function show(Module $module): Response
    {
        return Inertia::render('modulename::dashboard/module/Show', [
            'module' => new ModuleResource($module),
        ]);
    }

    // Edit modal (momentum-modal)
    public function edit(Module $module): Modal
    {
        return Inertia::modal('modulename::dashboard/module/Edit', [
            'module' => new ModuleResource($module),
        ])->baseRoute('modulename.modules.index');
    }

    public function update(UpdateModuleRequest $request, Module $module)
    {
        $this->moduleService->update($module, $request->validated());

        return redirect()->route('modulename.modules.index')
            ->with('success', 'Module updated successfully.');
    }

    public function destroy(Module $module)
    {
        $this->moduleService->delete($module);

        return redirect()->route('modulename.modules.index')
            ->with('success', 'Module deleted successfully.');
    }
}
```

### 4. Form Requests

**StoreModuleRequest.php:**
```php
<?php

namespace Modules\ModuleName\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreModuleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:modules,email'],
            'status' => ['required', 'in:active,inactive'],
        ];
    }
}
```

### 5. API Resource (`app/Http/Resources/ModuleResource.php`)

```php
<?php

namespace Modules\ModuleName\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ModuleResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'status' => $this->status,
            'created_at' => $this->created_at?->toISOString(),
            'updated_at' => $this->updated_at?->toISOString(),
        ];
    }
}
```

### 6. Routes (`routes/dashboard.php`)

```php
<?php

use Illuminate\Support\Facades\Route;
use Modules\ModuleName\Http\Controllers\ModuleController;

Route::middleware(['auth', 'verified'])
    ->prefix('dashboard')
    ->group(function () {
        Route::resource('modules', ModuleController::class)
            ->names('modulename.modules');
    });
```

---

## Frontend Implementation

### 1. Index Page with TableReusable

```vue
<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import { ref, computed, type VNode } from 'vue';
import { Plus, Eye, Pencil, Trash2 } from 'lucide-vue-next';

import AppLayout from '@/layouts/AppLayout.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    TableReusable,
    ModalConfirm,
    type TableColumn,
    type TableAction,
} from '@/components/shared';

// Persistent layout required for momentum-modal
defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, { breadcrumbs: [
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Modules', href: '/dashboard/modules' },
        ]}, () => page),
});

interface Module {
    id: number;
    name: string;
    email: string;
    status: 'active' | 'inactive';
    created_at: string;
}

interface Props {
    modules: {
        data: Module[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
    filters: { status?: string; search?: string };
    stats: { total: number; active: number; inactive: number };
}

const props = defineProps<Props>();

// State
const searchQuery = ref(props.filters.search || '');
const isDeleteModalOpen = ref(false);
const isDeleting = ref(false);
const selectedItem = ref<Module | null>(null);

// Client-side filtering
const filteredData = computed(() => {
    if (!searchQuery.value) return props.modules.data;
    const query = searchQuery.value.toLowerCase();
    return props.modules.data.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
});

// Table columns
const columns: TableColumn<Module>[] = [
    { key: 'name', label: 'Name', width: '30%' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Created' },
];

// Table actions
const tableActions: TableAction<Module>[] = [
    { label: 'View', icon: Eye, onClick: (item) => router.visit(`/dashboard/modules/${item.id}`) },
    { label: 'Edit', icon: Pencil, onClick: (item) => router.visit(`/dashboard/modules/${item.id}/edit`) },
    {
        label: 'Delete',
        icon: Trash2,
        onClick: (item) => { selectedItem.value = item; isDeleteModalOpen.value = true; },
        variant: 'destructive',
        separator: true,
    },
];

// Handlers
const handleCreate = () => router.visit('/dashboard/modules/create');
const handlePageChange = (page: number) => router.get('/dashboard/modules', { page }, { preserveState: true });
const handleDelete = () => {
    if (!selectedItem.value) return;
    isDeleting.value = true;
    router.delete(`/dashboard/modules/${selectedItem.value.id}`, {
        onSuccess: () => { isDeleteModalOpen.value = false; selectedItem.value = null; },
        onFinish: () => { isDeleting.value = false; },
    });
};
</script>

<template>
    <Head title="Modules" />
    <div class="flex flex-1 flex-col gap-4 p-4">
        <Card>
            <CardHeader>
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle>Modules</CardTitle>
                        <CardDescription>Manage your modules</CardDescription>
                    </div>
                    <Button @click="handleCreate">
                        <Plus class="mr-2 h-4 w-4" /> Add Module
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <TableReusable
                    v-model:search-query="searchQuery"
                    :data="filteredData"
                    :columns="columns"
                    :actions="tableActions"
                    :pagination="modules"
                    search-placeholder="Search..."
                    empty-message="No modules found."
                    @page-change="handlePageChange"
                >
                    <!-- Custom cell slots -->
                    <template #cell-status="{ item }">
                        <Badge :variant="item.status === 'active' ? 'default' : 'secondary'">
                            {{ item.status }}
                        </Badge>
                    </template>
                </TableReusable>
            </CardContent>
        </Card>
    </div>

    <ModalConfirm
        v-model:open="isDeleteModalOpen"
        title="Delete Module"
        :description="`Delete '${selectedItem?.name}'? This cannot be undone.`"
        confirm-text="Delete"
        variant="danger"
        :loading="isDeleting"
        @confirm="handleDelete"
    />
</template>
```

### 2. Reusable Form Component (`components/ModuleForm.vue`)

```vue
<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import type { InertiaForm } from '@inertiajs/vue3';

export interface ModuleFormData {
    name: string;
    email: string;
    status: 'active' | 'inactive';
}

interface Props {
    mode?: 'create' | 'edit';
}

withDefaults(defineProps<Props>(), { mode: 'create' });

const model = defineModel<InertiaForm<ModuleFormData>>({ required: true });
</script>

<template>
    <div class="space-y-6">
        <div class="space-y-4">
            <div>
                <h3 class="text-sm font-medium">Basic Information</h3>
                <p class="text-sm text-muted-foreground">Enter the module details</p>
            </div>
            <Separator />

            <div class="grid gap-4 sm:grid-cols-2">
                <div class="space-y-2">
                    <Label for="name">Name <span class="text-destructive">*</span></Label>
                    <Input id="name" v-model="model.name" placeholder="Module name" />
                    <p v-if="model.errors.name" class="text-sm text-destructive">{{ model.errors.name }}</p>
                </div>

                <div class="space-y-2">
                    <Label for="email">Email <span class="text-destructive">*</span></Label>
                    <Input id="email" v-model="model.email" type="email" placeholder="email@example.com" />
                    <p v-if="model.errors.email" class="text-sm text-destructive">{{ model.errors.email }}</p>
                </div>

                <div class="space-y-2">
                    <Label for="status">Status</Label>
                    <Select v-model="model.status">
                        <SelectTrigger><SelectValue placeholder="Select status" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    </div>
</template>
```

### 3. Create Modal Page (`Create.vue`)

```vue
<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import ModuleForm from './components/ModuleForm.vue';
import type { ModuleFormData } from './components/ModuleForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';

const { show, close, redirect } = useModal();

const isOpen = computed({
    get: () => show.value,
    set: (val: boolean) => { if (!val) { close(); redirect(); } },
});

const form = useForm<ModuleFormData>({
    name: '',
    email: '',
    status: 'active',
});

const handleSubmit = () => {
    form.post('/dashboard/modules', {
        onSuccess: () => { close(); redirect(); },
    });
};

const handleCancel = () => { close(); redirect(); };
</script>

<template>
    <ModalForm
        v-model:open="isOpen"
        title="Create Module"
        description="Add a new module"
        mode="create"
        size="2xl"
        submit-text="Create"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <ModuleForm v-model="form" mode="create" />
    </ModalForm>
</template>
```

### 4. Edit Modal Page (`Edit.vue`)

```vue
<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import ModuleForm from './components/ModuleForm.vue';
import type { ModuleFormData } from './components/ModuleForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';

interface Props {
    module: { id: number; name: string; email: string; status: 'active' | 'inactive' };
}

const props = defineProps<Props>();
const { show, close, redirect } = useModal();

const isOpen = computed({
    get: () => show.value,
    set: (val: boolean) => { if (!val) { close(); redirect(); } },
});

const form = useForm<ModuleFormData>({
    name: props.module.name,
    email: props.module.email,
    status: props.module.status,
});

const handleSubmit = () => {
    form.put(`/dashboard/modules/${props.module.id}`, {
        onSuccess: () => { close(); redirect(); },
    });
};

const handleCancel = () => { close(); redirect(); };
</script>

<template>
    <ModalForm
        v-model:open="isOpen"
        :title="`Edit ${module.name}`"
        description="Update module information"
        mode="edit"
        size="2xl"
        submit-text="Save Changes"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <ModuleForm v-model="form" mode="edit" />
    </ModalForm>
</template>
```

---

## Reusable Components

### TableReusable

```typescript
import { TableReusable, type TableColumn, type TableAction } from '@/components/shared';

// Column definition
const columns: TableColumn<T>[] = [
    { key: 'name', label: 'Name', width: '30%' },
    { key: 'status', label: 'Status', align: 'center' },
];

// Action definition
const actions: TableAction<T>[] = [
    { label: 'View', icon: Eye, onClick: (item) => {} },
    { label: 'Delete', icon: Trash2, onClick: (item) => {}, variant: 'destructive', separator: true },
];
```

**Props:**
- `data: T[]` - Array of items
- `columns: TableColumn<T>[]` - Column definitions
- `actions?: TableAction<T>[]` - Row actions
- `pagination?: { current_page, last_page, per_page, total }` - Pagination data
- `searchQuery: string` - v-model for search
- `searchPlaceholder?: string`
- `emptyMessage?: string`

**Slots:**
- `#toolbar` - Extra toolbar items
- `#cell-{key}` - Custom cell rendering

### ModalForm

```typescript
import { ModalForm } from '@/components/shared';
```

**Props:**
- `open: boolean` - v-model for visibility
- `title: string`
- `description?: string`
- `mode: 'create' | 'edit'`
- `size: 'sm' | 'md' | 'lg' | 'xl' | '2xl'`
- `submitText?: string`
- `loading?: boolean`

**Events:**
- `@submit` - Form submission
- `@cancel` - Cancel/close

### ModalConfirm

```typescript
import { ModalConfirm } from '@/components/shared';
```

**Props:**
- `open: boolean` - v-model for visibility
- `title: string`
- `description: string`
- `confirmText?: string`
- `variant: 'default' | 'danger'`
- `loading?: boolean`

**Events:**
- `@confirm` - Confirm action

### StatsCard

```vue
<script setup lang="ts">
import { StatsCard } from '@/components/shared';
import { Users, UserCheck, CheckCircle, Shield } from 'lucide-vue-next';
</script>

<template>
    <div class="grid gap-4 md:grid-cols-4">
        <StatsCard
            title="Total Users"
            :value="stats.total"
            :icon="Users"
            icon-color="text-muted-foreground"
        />
        <StatsCard
            title="Active"
            :value="stats.active"
            :icon="UserCheck"
            icon-color="text-green-500"
            value-color="text-green-600"
        />
        <StatsCard
            title="Verified"
            :value="stats.verified"
            :icon="CheckCircle"
            icon-color="text-blue-500"
            value-color="text-blue-600"
            description="Email verified users"
        />
        <StatsCard
            title="Premium"
            :value="stats.premium"
            :icon="Shield"
            icon-color="text-purple-500"
            value-color="text-purple-600"
            :trend="{ value: 12, isPositive: true }"
        />
    </div>
</template>
```

**Props:**
- `title: string` - Card title
- `value: number | string` - Main value (auto-formatted with locale)
- `icon?: Component` - Lucide icon component
- `iconColor?: string` - Tailwind class for icon color (default: `text-muted-foreground`)
- `valueColor?: string` - Tailwind class for value color
- `description?: string` - Optional description text
- `trend?: { value: number, isPositive: boolean }` - Optional trend indicator

---

## Factory & Seeder

### Factory (`database/factories/ModuleFactory.php`)

```php
<?php

namespace Modules\ModuleName\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Modules\ModuleName\Models\Module;

class ModuleFactory extends Factory
{
    protected $model = Module::class;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'status' => fake()->randomElement(['active', 'inactive']),
        ];
    }

    // State methods
    public function active(): static
    {
        return $this->state(fn () => ['status' => 'active']);
    }

    public function inactive(): static
    {
        return $this->state(fn () => ['status' => 'inactive']);
    }
}
```

### Seeder (`database/seeders/ModuleSeeder.php`)

```php
<?php

namespace Modules\ModuleName\Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\ModuleName\Models\Module;

class ModuleSeeder extends Seeder
{
    public function run(): void
    {
        // Demo data
        Module::factory()->create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'status' => 'active',
        ]);

        // Random data
        Module::factory()->count(20)->active()->create();
        Module::factory()->count(5)->inactive()->create();
    }
}
```

---

## Quick Reference

### Create New CRUD Module

1. **Generate module**: `php artisan module:make ModuleName`
2. **Create model** with fillable, casts, scopes
3. **Create migration** and run: `php artisan migrate`
4. **Create service** for business logic
5. **Create form requests** for validation
6. **Create resource** for data transformation
7. **Create controller** with service injection
8. **Add routes** to `routes/dashboard.php`
9. **Create Vue pages**: Index, Create, Edit, Show
10. **Create form component** with `defineModel`
11. **Create factory and seeder**
12. **Run seeder**: `php artisan module:seed ModuleName`

### File Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Model | `{Module}.php` | `Customer.php` |
| Controller | `{Module}Controller.php` | `CustomerController.php` |
| Service | `{Module}Service.php` | `CustomerService.php` |
| Request | `Store{Module}Request.php` | `StoreCustomerRequest.php` |
| Resource | `{Module}Resource.php` | `CustomerResource.php` |
| Vue Page | `Index.vue`, `Create.vue`, `Edit.vue`, `Show.vue` | - |
| Form Component | `{Module}Form.vue` | `CustomerForm.vue` |
| Factory | `{Module}Factory.php` | `CustomerFactory.php` |
| Seeder | `{Module}Seeder.php` | `CustomerSeeder.php` |

---

## Related Documentation

- [Momentum Modal Guide](./momentum-modal.md)
- [Media Library Guide](./MEDIA_LIBRARY.md)
- [Modules CLI Guide](./MODULES_CLI.md)
