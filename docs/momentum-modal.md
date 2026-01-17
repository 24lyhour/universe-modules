# Momentum Modal Implementation Guide

This document explains how to use `based/momentum-modal` for backend-driven modals in this Laravel + Inertia + Vue application.

## Overview

Momentum Modal allows you to render modal dialogs driven by the backend while keeping the underlying page visible. When navigating to a modal route, the modal component appears as an overlay on top of the current page with the URL updated accordingly.

## Installation

The following packages are already installed:

**Backend (Composer):**
```bash
composer require based/momentum-modal
```

**Frontend (NPM):**
```bash
npm install momentum-modal
```

## Configuration

### 1. App Entry Point (`resources/js/app.ts`)

The modal plugin requires a **lazy resolver** that returns Promises:

```typescript
import { createInertiaApp } from '@inertiajs/vue3';
import { modal } from 'momentum-modal';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';

// Eager-loaded pages for Inertia (faster initial load)
const eagerPages = import.meta.glob<DefineComponent>('/resources/js/pages/**/*.vue', { eager: true });
const eagerModulePages = import.meta.glob<DefineComponent>('/Modules/*/resources/js/pages/**/*.vue', { eager: true });

// Lazy-loaded pages for modal resolver (returns Promises)
const lazyPages = import.meta.glob<DefineComponent>('/resources/js/pages/**/*.vue');
const lazyModulePages = import.meta.glob<DefineComponent>('/Modules/*/resources/js/pages/**/*.vue');

// Resolve page component for Inertia (eager, returns component directly)
const resolvePageComponent = (name: string) => {
    if (name.includes('::')) {
        const [moduleName, pagePath] = name.split('::');
        const moduleKey = `/Modules/${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}/resources/js/pages/${pagePath}.vue`;
        return eagerModulePages[moduleKey];
    }
    return eagerPages[`/resources/js/pages/${name}.vue`];
};

// Resolve page component for momentum-modal (lazy, returns Promise)
const resolveModalComponent = (name: string) => {
    if (name.includes('::')) {
        const [moduleName, pagePath] = name.split('::');
        const moduleKey = `/Modules/${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}/resources/js/pages/${pagePath}.vue`;
        return lazyModulePages[moduleKey]();
    }
    return lazyPages[`/resources/js/pages/${name}.vue`]();
};

createInertiaApp({
    resolve: resolvePageComponent,
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(modal, {
                resolve: resolveModalComponent,
            })
            .use(plugin)
            .mount(el);
    },
});
```

### 2. Layout Component (`resources/js/layouts/app/AppSidebarLayout.vue`)

Add the `<Modal />` component to your layout:

```vue
<script setup lang="ts">
import { Modal } from 'momentum-modal';
// ... other imports
</script>

<template>
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar">
            <AppSidebarHeader :breadcrumbs="breadcrumbs" />
            <slot />
        </AppContent>
        <!-- Momentum Modal Portal -->
        <Modal />
    </AppShell>
</template>
```

### 3. Persistent Layout (Index Page)

The base page **must use a persistent layout** for the modal to overlay correctly:

```vue
<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import { type VNode } from 'vue';

// Persistent layout required for momentum-modal to work
defineOptions({
    layout: (h: (type: unknown, props: unknown, children: unknown) => VNode, page: VNode) =>
        h(AppLayout, { breadcrumbs: [
            { title: 'Dashboard', href: '/dashboard' },
            { title: 'Portfolios', href: '/dashboard/portfolios' },
        ]}, () => page),
});
</script>
```

## Usage

### Backend Controller

Use `Inertia::modal()` instead of `Inertia::render()` for modal routes:

```php
<?php

namespace Modules\Porfolio\Http\Controllers;

use Inertia\Inertia;
use Momentum\Modal\Modal;

class PorfolioController extends Controller
{
    // Regular page (Index)
    public function index(): Response
    {
        return Inertia::render('porfolio::dashboard/portfolios/Index', [
            'portfolios' => $this->portfolioService->getPaginatedPortfolios(),
        ]);
    }

    // Modal page (Create)
    public function create(): Modal
    {
        return Inertia::modal('porfolio::dashboard/portfolios/Create', [
            'categories' => $this->portfolioService->getCategories(),
        ])->baseRoute('porfolio.index');
    }

    // Modal page (Edit)
    public function edit(int $id): Modal
    {
        $portfolio = $this->portfolioService->getPortfolioById($id);

        return Inertia::modal('porfolio::dashboard/portfolios/Edit', [
            'portfolio' => $portfolio,
            'categories' => $this->portfolioService->getCategories(),
        ])->baseRoute('porfolio.index');
    }
}
```

**Key points:**
- Return type is `Momentum\Modal\Modal` (not `Inertia\Response`)
- Use `->baseRoute('route.name')` to specify which page the modal overlays
- The page naming follows the module pattern: `modulename::path/to/Page`

### Frontend Modal Component

Create a modal page component using `useModal()`:

```vue
<script setup lang="ts">
import { ModalForm } from '@/components/shared';
import PortfolioForm from '../components/PorfolioForm.vue';
import { useForm } from '@inertiajs/vue3';
import { useModal } from 'momentum-modal';
import { computed } from 'vue';
import * as porfolio from '@/routes/porfolio';

interface Props {
    categories: string[];
}

defineProps<Props>();

// Get modal controls from momentum-modal
const { show, close, redirect } = useModal();

// Create a computed property for v-model:open binding
const isOpen = computed({
    get: () => show.value,
    set: (val: boolean) => {
        if (!val) {
            close();
            redirect();
        }
    },
});

const form = useForm({
    title: '',
    description: '',
    // ... other fields
});

const handleSubmit = () => {
    form.post(porfolio.store.url(), {
        onSuccess: () => {
            close();
            redirect();
        },
    });
};

const handleCancel = () => {
    close();
    redirect();
};
</script>

<template>
    <ModalForm
        v-model:open="isOpen"
        title="Create Portfolio"
        description="Add a new portfolio project"
        mode="create"
        size="2xl"
        submit-text="Create"
        :loading="form.processing"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
        <PortfolioForm v-model="form" />
    </ModalForm>
</template>
```

### Opening a Modal from Index Page

Use `router.visit()` to navigate to the modal route:

```vue
<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import * as porfolio from '@/routes/porfolio';

const handleCreate = () => {
    router.visit(porfolio.create.url());
};

const handleEdit = (item: Portfolio) => {
    router.visit(porfolio.edit.url(item.id));
};
</script>

<template>
    <Button @click="handleCreate">
        Add Portfolio
    </Button>
</template>
```

## useModal() API

The `useModal()` composable returns:

| Property | Type | Description |
|----------|------|-------------|
| `show` | `Ref<boolean>` | Whether the modal is currently visible |
| `close` | `() => void` | Close the modal |
| `redirect` | `() => void` | Navigate back to the base route |
| `props` | `ComputedRef<Record<string, unknown>>` | Props passed to the modal |
| `vnode` | `Ref<VNode \| null>` | The modal's virtual node |

## File Structure

```
Modules/Porfolio/
├── app/Http/Controllers/
│   └── PorfolioController.php      # Returns Modal for create/edit
├── resources/js/pages/dashboard/portfolios/
│   ├── Index.vue                    # Base page with persistent layout
│   ├── Create.vue                   # Modal component for creating
│   ├── Edit.vue                     # Modal component for editing
│   └── components/
│       └── PorfolioForm.vue         # Shared form component
└── routes/web.php                   # Standard resource routes
```

## Routes

Standard Laravel resource routes work with momentum-modal:

```php
Route::resource('dashboard/portfolios', PorfolioController::class)
    ->names('porfolio');
```

The routes automatically map:
- `GET /dashboard/portfolios` → `index()` → Regular page
- `GET /dashboard/portfolios/create` → `create()` → Modal overlay
- `GET /dashboard/portfolios/{id}/edit` → `edit()` → Modal overlay
- `POST /dashboard/portfolios` → `store()` → Redirect back
- `PUT /dashboard/portfolios/{id}` → `update()` → Redirect back

## TypeScript Support

Add type declarations in `resources/js/types/momentum-modal.d.ts`:

```typescript
declare module 'momentum-modal' {
    import type { App, Component, ComputedRef, Ref, VNode } from 'vue';

    export const Modal: Component;

    export interface ModalPluginOptions {
        resolve: (name: string) => unknown;
    }

    export const modal: {
        install(app: App, options: ModalPluginOptions): void;
    };

    export function useModal(): {
        show: Ref<boolean>;
        vnode: Ref<VNode | null>;
        close: () => void;
        redirect: () => void;
        props: ComputedRef<Record<string, unknown>>;
    };
}
```

## Troubleshooting

### Modal not appearing

1. Ensure the `<Modal />` component is in your layout
2. Verify the base page uses a **persistent layout** (via `defineOptions`)
3. Check the controller returns `Modal` type, not `Response`
4. Verify `->baseRoute()` matches the actual route name

### "loader(...).catch is not a function" error

The modal resolver must return a **Promise**. Use lazy imports:

```typescript
// Wrong (eager)
const pages = import.meta.glob('...', { eager: true });
return pages[key]; // Returns component directly

// Correct (lazy)
const pages = import.meta.glob('...');
return pages[key](); // Returns Promise
```

### URL changes but modal doesn't show

Check browser console for errors. Common issues:
- Page component path doesn't match glob pattern
- Module naming convention mismatch (case sensitivity)

## References

- [Momentum Modal Documentation](https://github.com/lepikhinb/momentum-modal)
- [Inertia.js Documentation](https://inertiajs.com/)
