import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { modal } from 'momentum-modal';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { initializeTheme } from './composables/useAppearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Lazy-loaded pages (code splitting - better for production)
const pages = import.meta.glob<DefineComponent>('/resources/js/pages/**/*.vue');
const modulePages = import.meta.glob<DefineComponent>('/Modules/*/resources/js/pages/**/*.vue');

/**
 * Resolve page component (lazy, returns Promise)
 */
const resolvePageComponent = (name: string): Promise<DefineComponent> => {
    // Check if it's a module page (format: modulename::path/to/Page)
    if (name.includes('::')) {
        const [moduleName, pagePath] = name.split('::');
        const formattedModuleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

        const moduleKey = `/Modules/${formattedModuleName}/resources/js/pages/${pagePath}.vue`;
        let loader = modulePages[moduleKey];

        // Fallback: try without leading slash
        if (typeof loader === 'undefined') {
            const relativeModuleKey = moduleKey.substring(1);
            loader = modulePages[relativeModuleKey];
        }

        if (typeof loader === 'undefined') {
            throw new Error(`Module page not found: ${moduleKey}`);
        }
        return loader();
    }

    // Regular pages
    const loader = pages[`/resources/js/pages/${name}.vue`];
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
                resolve: resolvePageComponent,
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
