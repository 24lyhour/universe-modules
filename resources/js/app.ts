import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { modal } from 'momentum-modal';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { initializeTheme } from './composables/useAppearance';
import { initializeToastNotifications } from './plugins/toast';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Eager-loaded pages for Inertia (faster initial load)
const eagerPages = import.meta.glob<DefineComponent>('/resources/js/pages/**/*.vue', { eager: true });
const eagerModulePages = import.meta.glob<DefineComponent>('/Modules/*/resources/js/pages/**/*.vue', { eager: true });

// Lazy-loaded pages for modal resolver (returns Promises)
const lazyPages = import.meta.glob<DefineComponent>('/resources/js/pages/**/*.vue');
const lazyModulePages = import.meta.glob<DefineComponent>('/Modules/*/resources/js/pages/**/*.vue');

/**
 * Resolve page component for Inertia (eager, returns component directly)
 */
const resolvePageComponent = (name: string) => {
    // Check if it's a module page (format: modulename::path/to/Page)
    if (name.includes('::')) {
        const [moduleName, pagePath] = name.split('::');
        const moduleKey = `/Modules/${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}/resources/js/pages/${pagePath}.vue`;
        const page = eagerModulePages[moduleKey];
        if (typeof page === 'undefined') {
            throw new Error(`Module page not found: ${moduleKey}`);
        }
        return page;
    }

    // Regular pages
    const page = eagerPages[`/resources/js/pages/${name}.vue`];
    if (typeof page === 'undefined') {
        throw new Error(`Page not found: /resources/js/pages/${name}.vue`);
    }
    return page;
};

/**
 * Resolve page component for momentum-modal (lazy, returns Promise)
 */
const resolveModalComponent = (name: string) => {
    // Check if it's a module page (format: modulename::path/to/Page)
    if (name.includes('::')) {
        const [moduleName, pagePath] = name.split('::');
        const moduleKey = `/Modules/${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}/resources/js/pages/${pagePath}.vue`;
        const loader = lazyModulePages[moduleKey];
        if (typeof loader === 'undefined') {
            throw new Error(`Module page not found: ${moduleKey}`);
        }
        return loader();
    }

    // Regular pages
    const loader = lazyPages[`/resources/js/pages/${name}.vue`];
    if (typeof loader === 'undefined') {
        throw new Error(`Page not found: /resources/js/pages/${name}.vue`);
    }
    return loader();
};

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: resolvePageComponent,
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(modal, {
                resolve: resolveModalComponent,
            })
            .use(plugin)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on page load...
initializeTheme();

// Initialize global toast notifications for flash messages
initializeToastNotifications();
