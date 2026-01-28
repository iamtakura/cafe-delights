import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
export default {
    // ⚠️ REPLACE 'YOUR_REPO_NAME' WITH YOUR ACTUAL GITHUB REPO NAME
    // Example: If your repo is at github.com/user/my-cool-site, use '/my-cool-site/'
    base: '/iam.takura/', 
    
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
