import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { modal } from 'momentum-modal';
import { createSSRApp, DefineComponent, h } from 'vue';
import { renderToString } from 'vue/server-renderer';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Eager-loaded pages for SSR
const pages = import.meta.glob<DefineComponent>('/resources/js/pages/**/*.vue', { eager: true });
const modulePages = import.meta.glob<DefineComponent>('/Modules/*/resources/js/pages/**/*.vue', { eager: true });

/**
 * Resolve page component for SSR (supports module pages)
 */
const resolvePageComponent = (name: string) => {
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
};

createServer(
    (page) =>
        createInertiaApp({
            page,
            render: renderToString,
            title: (title) => (title ? `${title} - ${appName}` : appName),
            resolve: resolvePageComponent,
            setup: ({ App, props, plugin }) =>
                createSSRApp({ render: () => h(App, props) })
                    .use(modal, {
                        resolve: resolvePageComponent,
                    })
                    .use(plugin),
        }),
    { cluster: true },
);
