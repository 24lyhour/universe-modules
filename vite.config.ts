import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

// Dynamically generate module aliases
const modulesPath = path.resolve(__dirname, 'Modules');
const moduleAliases: Record<string, string> = {};

if (fs.existsSync(modulesPath)) {
    fs.readdirSync(modulesPath).forEach((moduleName) => {
        const moduleJsPath = path.join(modulesPath, moduleName, 'resources/js');
        if (fs.existsSync(moduleJsPath)) {
            moduleAliases[`@${moduleName.toLowerCase()}`] = moduleJsPath;
        }
    });
}

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            ssr: 'resources/js/ssr.ts',
            refresh: true,
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
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
});
