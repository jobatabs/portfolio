import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: 'src',
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        about: 'src/about.html',
        contact: 'src/contact.html',
        proj1: 'src/proj1.html'
      }
    }
  }
})