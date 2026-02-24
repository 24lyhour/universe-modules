import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';

// Module aliases - explicit for reliable builds
const modulesPath = path.resolve(__dirname, 'Modules');
const moduleAliases: Record<string, string> = {
    '@blog': path.resolve(modulesPath, 'Blog/resources/js'),
    '@booking': path.resolve(modulesPath, 'Booking/resources/js'),
    '@company': path.resolve(modulesPath, 'Company/resources/js'),
    '@customer': path.resolve(modulesPath, 'Customer/resources/js'),
    '@employee': path.resolve(modulesPath, 'Employee/resources/js'),
    '@hotel': path.resolve(modulesPath, 'Hotel/resources/js'),
    '@media': path.resolve(modulesPath, 'Media/resources/js'),
    '@menu': path.resolve(modulesPath, 'Menu/resources/js'),
    '@movice': path.resolve(modulesPath, 'Movice/resources/js'),
    '@order': path.resolve(modulesPath, 'Order/resources/js'),
    '@outlet': path.resolve(modulesPath, 'Outlet/resources/js'),
    '@payment': path.resolve(modulesPath, 'Payment/resources/js'),
    '@porfolio': path.resolve(modulesPath, 'Porfolio/resources/js'),
    '@product': path.resolve(modulesPath, 'Product/resources/js'),
    '@report': path.resolve(modulesPath, 'Report/resources/js'),
    '@school': path.resolve(modulesPath, 'School/resources/js'),
    '@wallets': path.resolve(modulesPath, 'Wallets/resources/js'),
};

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        // Skip wayfinder in CI/Docker builds (causes segfault)
        // Wayfinder disabled for production builds - only enable locally
        ...(process.env.NODE_ENV === 'production' ? [] : [wayfinder({
            formVariants: true,
        })]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@modules': modulesPath,
            ...moduleAliases,
        },
    },
    server: {
        fs: {
            // Allow serving files from Modules directory (git submodules)
            allow: ['.', 'Modules'],
        },
        watch: {
            // Watch files in Modules directory for HMR
            ignored: ['!**/Modules/**'],
        },
    },
});
