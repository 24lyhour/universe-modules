# Shared Components

## ReusableTable

A flexible, type-safe data table component with built-in search, pagination, and actions dropdown.

### Import

```typescript
import { ReusableTable, type TableColumn, type TableAction, type PaginationData } from '@/components/shared';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | Required | Array of data items to display |
| `columns` | `TableColumn<T>[]` | Required | Column definitions |
| `actions` | `TableAction<T>[]` | `undefined` | Row action menu items |
| `pagination` | `PaginationData` | `undefined` | Pagination configuration |
| `searchable` | `boolean` | `true` | Show/hide search input |
| `searchPlaceholder` | `string` | `'Search...'` | Search input placeholder |
| `emptyMessage` | `string` | `'No data found.'` | Message when no data |
| `loading` | `boolean` | `false` | Show loading state |
| `rowKey` | `keyof T \| ((item: T) => string \| number)` | `'id'` | Unique key for rows |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `search` | `string` | Emitted when search input changes |
| `pageChange` | `number` | Emitted when page changes |
| `rowClick` | `T` | Emitted when a row is clicked |

### Models

| Model | Type | Description |
|-------|------|-------------|
| `searchQuery` | `string` | Two-way binding for search query |

### Types

#### TableColumn<T>

```typescript
interface TableColumn<T> {
    key: string;           // Property key or dot-notation path (e.g., 'user.name')
    label: string;         // Column header text
    sortable?: boolean;    // Enable sorting (future feature)
    align?: 'left' | 'center' | 'right';  // Text alignment
    width?: string;        // Column width (e.g., '100px', '20%')
    render?: (item: T) => any;  // Custom render function
}
```

#### TableAction<T>

```typescript
interface TableAction<T> {
    label: string;         // Action button text
    icon?: Component;      // Lucide icon component
    onClick: (item: T) => void;  // Click handler
    variant?: 'default' | 'destructive';  // Button style
    show?: (item: T) => boolean;  // Conditional visibility
    separator?: boolean;   // Add separator before this action
}
```

#### PaginationData

```typescript
interface PaginationData {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
```

### Slots

| Slot | Props | Description |
|------|-------|-------------|
| `toolbar` | - | Add custom elements next to search |
| `cell-{key}` | `{ item: T, value: any }` | Custom cell rendering |
| `empty` | - | Custom empty state |

### Basic Example

```vue
<script setup lang="ts">
import { ReusableTable, type TableColumn } from '@/components/shared';

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
];

const columns: TableColumn<User>[] = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', align: 'center' },
];
</script>

<template>
    <ReusableTable :data="users" :columns="columns" />
</template>
```

### With Actions

```vue
<script setup lang="ts">
import { ReusableTable, type TableColumn, type TableAction } from '@/components/shared';
import { Eye, Pencil, Trash2 } from 'lucide-vue-next';

interface Portfolio {
    id: number;
    title: string;
    category: string;
    is_active: boolean;
}

const columns: TableColumn<Portfolio>[] = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
];

const actions: TableAction<Portfolio>[] = [
    {
        label: 'View',
        icon: Eye,
        onClick: (item) => openViewModal(item)
    },
    {
        label: 'Edit',
        icon: Pencil,
        onClick: (item) => openEditModal(item)
    },
    {
        label: 'Delete',
        icon: Trash2,
        onClick: (item) => openDeleteModal(item),
        variant: 'destructive',
        separator: true,  // Adds a separator before this action
        show: (item) => item.is_active  // Only show for active items
    },
];
</script>

<template>
    <ReusableTable
        :data="portfolios"
        :columns="columns"
        :actions="actions"
    />
</template>
```

### With Pagination

```vue
<script setup lang="ts">
import { ReusableTable } from '@/components/shared';
import { router } from '@inertiajs/vue3';

interface Props {
    portfolios: {
        data: Portfolio[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const props = defineProps<Props>();

const handlePageChange = (page: number) => {
    router.get(route('portfolio.index'), { page }, { preserveState: true });
};
</script>

<template>
    <ReusableTable
        :data="portfolios.data"
        :columns="columns"
        :pagination="portfolios"
        @page-change="handlePageChange"
    />
</template>
```

### With Custom Cell Rendering

```vue
<script setup lang="ts">
import { ReusableTable, type TableColumn } from '@/components/shared';

interface Portfolio {
    id: number;
    title: string;
    featured_image: string | null;
    is_active: boolean;
    is_featured: boolean;
}

const columns: TableColumn<Portfolio>[] = [
    { key: 'title', label: 'Title' },
    { key: 'is_active', label: 'Status' },
];
</script>

<template>
    <ReusableTable :data="portfolios" :columns="columns">
        <!-- Custom cell for title with image -->
        <template #cell-title="{ item }">
            <div class="flex items-center gap-3">
                <img
                    v-if="item.featured_image"
                    :src="item.featured_image"
                    :alt="item.title"
                    class="h-10 w-10 rounded-md object-cover"
                />
                <div>
                    <div class="font-medium">{{ item.title }}</div>
                </div>
            </div>
        </template>

        <!-- Custom cell for status badges -->
        <template #cell-is_active="{ item }">
            <span
                :class="[
                    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
                    item.is_active
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                ]"
            >
                {{ item.is_active ? 'Active' : 'Inactive' }}
            </span>
        </template>
    </ReusableTable>
</template>
```

### With Toolbar Slot

```vue
<script setup lang="ts">
import { ReusableTable } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Plus, Download } from 'lucide-vue-next';
</script>

<template>
    <ReusableTable :data="portfolios" :columns="columns">
        <template #toolbar>
            <Button variant="outline" size="sm">
                <Download class="mr-2 h-4 w-4" />
                Export
            </Button>
            <Button size="sm">
                <Plus class="mr-2 h-4 w-4" />
                Add New
            </Button>
        </template>
    </ReusableTable>
</template>
```

### With Custom Empty State

```vue
<template>
    <ReusableTable :data="portfolios" :columns="columns">
        <template #empty>
            <div class="flex flex-col items-center gap-2 py-8">
                <FolderOpen class="h-12 w-12 text-muted-foreground" />
                <p class="text-lg font-medium">No portfolios yet</p>
                <p class="text-sm text-muted-foreground">
                    Get started by creating your first portfolio.
                </p>
                <Button class="mt-4" @click="openCreateModal">
                    <Plus class="mr-2 h-4 w-4" />
                    Create Portfolio
                </Button>
            </div>
        </template>
    </ReusableTable>
</template>
```

### With Nested Property Access

```vue
<script setup lang="ts">
import { ReusableTable, type TableColumn } from '@/components/shared';

interface Order {
    id: number;
    user: {
        name: string;
        email: string;
    };
    total: number;
}

// Use dot notation for nested properties
const columns: TableColumn<Order>[] = [
    { key: 'id', label: 'Order ID' },
    { key: 'user.name', label: 'Customer' },
    { key: 'user.email', label: 'Email' },
    {
        key: 'total',
        label: 'Total',
        align: 'right',
        render: (item) => `$${item.total.toFixed(2)}`
    },
];
</script>

<template>
    <ReusableTable :data="orders" :columns="columns" />
</template>
```

### Full Example with All Features

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { ReusableTable, type TableColumn, type TableAction } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { Eye, Pencil, Trash2, Plus, ExternalLink } from 'lucide-vue-next';

interface Portfolio {
    id: number;
    title: string;
    slug: string;
    category: string | null;
    client_name: string | null;
    is_active: boolean;
    is_featured: boolean;
    project_url: string | null;
    created_at: string;
}

interface Props {
    portfolios: {
        data: Portfolio[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

const props = defineProps<Props>();

const searchQuery = ref('');

const columns: TableColumn<Portfolio>[] = [
    { key: 'title', label: 'Title', width: '30%' },
    { key: 'category', label: 'Category' },
    { key: 'client_name', label: 'Client' },
    { key: 'is_active', label: 'Status', align: 'center' },
    {
        key: 'created_at',
        label: 'Created',
        render: (item) => new Date(item.created_at).toLocaleDateString()
    },
];

const actions: TableAction<Portfolio>[] = [
    { label: 'View', icon: Eye, onClick: (item) => viewPortfolio(item) },
    { label: 'Edit', icon: Pencil, onClick: (item) => editPortfolio(item) },
    {
        label: 'Visit Project',
        icon: ExternalLink,
        onClick: (item) => window.open(item.project_url!, '_blank'),
        show: (item) => !!item.project_url
    },
    {
        label: 'Delete',
        icon: Trash2,
        onClick: (item) => deletePortfolio(item),
        variant: 'destructive',
        separator: true
    },
];

const handleSearch = (query: string) => {
    router.get(route('portfolio.index'), { search: query }, { preserveState: true });
};

const handlePageChange = (page: number) => {
    router.get(route('portfolio.index'), { page }, { preserveState: true });
};

const viewPortfolio = (item: Portfolio) => { /* ... */ };
const editPortfolio = (item: Portfolio) => { /* ... */ };
const deletePortfolio = (item: Portfolio) => { /* ... */ };
</script>

<template>
    <ReusableTable
        v-model:search-query="searchQuery"
        :data="portfolios.data"
        :columns="columns"
        :actions="actions"
        :pagination="portfolios"
        search-placeholder="Search portfolios..."
        empty-message="No portfolios found."
        @search="handleSearch"
        @page-change="handlePageChange"
    >
        <template #toolbar>
            <Button @click="openCreateModal">
                <Plus class="mr-2 h-4 w-4" />
                Add Portfolio
            </Button>
        </template>

        <template #cell-title="{ item }">
            <div>
                <div class="font-medium">{{ item.title }}</div>
                <div class="text-sm text-muted-foreground">{{ item.slug }}</div>
            </div>
        </template>

        <template #cell-category="{ item }">
            <span
                v-if="item.category"
                class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            >
                {{ item.category }}
            </span>
            <span v-else class="text-muted-foreground">-</span>
        </template>

        <template #cell-is_active="{ item }">
            <div class="flex items-center justify-center gap-1">
                <span
                    :class="[
                        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold',
                        item.is_active
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                    ]"
                >
                    {{ item.is_active ? 'Active' : 'Inactive' }}
                </span>
                <span
                    v-if="item.is_featured"
                    class="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                >
                    Featured
                </span>
            </div>
        </template>
    </ReusableTable>
</template>
```

---

## FormModal

A reusable modal component for create/edit forms with built-in loading states and form submission handling.

### Import

```typescript
import { FormModal } from '@/components/shared';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Modal title |
| `description` | `string` | `undefined` | Modal description |
| `mode` | `'create' \| 'edit'` | `'create'` | Form mode (affects default submit text) |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'lg'` | Modal max width |
| `submitText` | `string` | Based on mode | Submit button text |
| `cancelText` | `string` | `'Cancel'` | Cancel button text |
| `loading` | `boolean` | `false` | Show loading state |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `submit` | - | Emitted when form is submitted |
| `cancel` | - | Emitted when cancel is clicked |

### Models

| Model | Type | Description |
|-------|------|-------------|
| `open` | `boolean` | Two-way binding for modal open state |

### Example

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { FormModal } from '@/components/shared';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/vue3';

const isOpen = ref(false);
const form = useForm({ title: '', description: '' });

const handleSubmit = () => {
    form.post('/portfolios', {
        onSuccess: () => { isOpen.value = false; }
    });
};
</script>

<template>
    <FormModal
        v-model:open="isOpen"
        title="Create Portfolio"
        description="Add a new portfolio project."
        mode="create"
        :loading="form.processing"
        @submit="handleSubmit"
    >
        <div class="space-y-4">
            <div class="space-y-2">
                <Label for="title">Title</Label>
                <Input id="title" v-model="form.title" />
            </div>
            <div class="space-y-2">
                <Label for="description">Description</Label>
                <Input id="description" v-model="form.description" />
            </div>
        </div>
    </FormModal>
</template>
```

---

## ConfirmDialog

A confirmation dialog component with variants for different actions (danger, warning, info).

### Import

```typescript
import { ConfirmDialog } from '@/components/shared';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Dialog title |
| `description` | `string` | `undefined` | Dialog description |
| `confirmText` | `string` | `'Confirm'` | Confirm button text |
| `cancelText` | `string` | `'Cancel'` | Cancel button text |
| `variant` | `'danger' \| 'warning' \| 'info' \| 'default'` | `'default'` | Dialog variant |
| `loading` | `boolean` | `false` | Show loading state |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `confirm` | - | Emitted when confirm is clicked |
| `cancel` | - | Emitted when cancel is clicked |

### Models

| Model | Type | Description |
|-------|------|-------------|
| `open` | `boolean` | Two-way binding for dialog open state |

### Example

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ConfirmDialog } from '@/components/shared';
import { router } from '@inertiajs/vue3';

const isOpen = ref(false);
const isDeleting = ref(false);
const itemToDelete = ref<{ id: number; title: string } | null>(null);

const handleDelete = () => {
    if (!itemToDelete.value) return;
    isDeleting.value = true;
    router.delete(`/portfolios/${itemToDelete.value.id}`, {
        onSuccess: () => { isOpen.value = false; },
        onFinish: () => { isDeleting.value = false; }
    });
};
</script>

<template>
    <ConfirmDialog
        v-model:open="isOpen"
        title="Delete Portfolio"
        :description="`Are you sure you want to delete '${itemToDelete?.title}'? This action cannot be undone.`"
        variant="danger"
        confirm-text="Delete"
        :loading="isDeleting"
        @confirm="handleDelete"
    />
</template>
```

### Variants

- **danger**: Red styling with trash icon - for destructive actions
- **warning**: Yellow styling with warning icon - for caution actions
- **info**: Blue styling with info icon - for informational confirmations
- **default**: Gray styling - for general confirmations

---

## ViewModal

A modal component for displaying read-only details with optional edit button.

### Import

```typescript
import { ViewModal } from '@/components/shared';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Modal title |
| `description` | `string` | `undefined` | Modal description |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'lg'` | Modal max width |
| `showEditButton` | `boolean` | `true` | Show/hide edit button |
| `editText` | `string` | `'Edit'` | Edit button text |
| `closeText` | `string` | `'Close'` | Close button text |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `edit` | - | Emitted when edit is clicked |
| `close` | - | Emitted when close is clicked |

### Models

| Model | Type | Description |
|-------|------|-------------|
| `open` | `boolean` | Two-way binding for modal open state |

### Example

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ViewModal } from '@/components/shared';
import { Label } from '@/components/ui/label';

const isOpen = ref(false);
const selectedItem = ref<Portfolio | null>(null);

const handleEdit = () => {
    isOpen.value = false;
    // Open edit modal
};
</script>

<template>
    <ViewModal
        v-model:open="isOpen"
        :title="selectedItem?.title || ''"
        description="Portfolio Details"
        @edit="handleEdit"
    >
        <template v-if="selectedItem">
            <div class="grid gap-4 sm:grid-cols-2">
                <div>
                    <Label class="text-muted-foreground">Category</Label>
                    <p class="font-medium">{{ selectedItem.category || '-' }}</p>
                </div>
                <div>
                    <Label class="text-muted-foreground">Client</Label>
                    <p class="font-medium">{{ selectedItem.client_name || '-' }}</p>
                </div>
            </div>
            <div v-if="selectedItem.description">
                <Label class="text-muted-foreground">Description</Label>
                <p class="mt-1 text-sm">{{ selectedItem.description }}</p>
            </div>
        </template>
    </ViewModal>
</template>
```

---

## ReusableModal

A base modal component for custom modal implementations.

### Import

```typescript
import { ReusableModal } from '@/components/shared';
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | Required | Modal title |
| `description` | `string` | `undefined` | Modal description |
| `maxWidth` | `'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| 'full'` | `'md'` | Modal max width |
| `showFooter` | `boolean` | `true` | Show/hide footer |
| `scrollable` | `boolean` | `true` | Enable scrolling for content |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `close` | - | Emitted when modal is closed |

### Models

| Model | Type | Description |
|-------|------|-------------|
| `open` | `boolean` | Two-way binding for modal open state |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Modal content |
| `footer` | Custom footer (replaces default close button) |

### Example

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ReusableModal } from '@/components/shared';
import { Button } from '@/components/ui/button';

const isOpen = ref(false);
</script>

<template>
    <ReusableModal
        v-model:open="isOpen"
        title="Custom Modal"
        description="This is a custom modal."
        max-width="lg"
    >
        <p>Modal content goes here.</p>

        <template #footer>
            <Button variant="outline" @click="isOpen = false">Cancel</Button>
            <Button @click="doSomething">Confirm</Button>
        </template>
    </ReusableModal>
</template>
```
