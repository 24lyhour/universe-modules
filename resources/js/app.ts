import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { initializeTheme } from './composables/useAppearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>('/resources/js/pages/**/*.vue', { eager: true });
        const modulePages = import.meta.glob<DefineComponent>('/Modules/*/resources/js/pages/**/*.vue', { eager: true });

        // Check if it's a module page (format: modulename::path/to/Page)
        if (name.includes('::')) {
            const [moduleName, pagePath] = name.split('::');
            const moduleKey = `/Modules/${moduleName.charAt(0).toUpperCase() + moduleName.slice(1)}/resources/js/pages/${pagePath}.vue`;
            const page = modulePages[moduleKey];
            if (typeof page === 'undefined') {
                throw new Error(`Module page not found: ${moduleKey}`);
            }
            return page;
        }

        // Regular pages
        const page = pages[`/resources/js/pages/${name}.vue`];
        if (typeof page === 'undefined') {
            throw new Error(`Page not found: /resources/js/pages/${name}.vue`);
        }
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on page load...
initializeTheme();
