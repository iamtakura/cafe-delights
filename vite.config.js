
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
export default {
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                menu: resolve(__dirname, 'menu.html'),
                reviews: resolve(__dirname, 'reviews.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
    },
}
