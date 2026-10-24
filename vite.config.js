import path from 'path';
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/scss/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
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
            vue: 'vue/dist/vue.esm-bundler.js',
            "~components": path.resolve(import.meta.dirname, "resources", "js", "components"),
            "~pages": path.resolve(import.meta.dirname, "resources", "js", "pages"),
            '@': path.resolve(import.meta.dirname, "resources", "js"),
            "~sass": path.resolve(import.meta.dirname, "resources", "scss")
        },
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                additionalData: '@use "~sass/_variables.scss" as *;'
            }
        }
    }
});
