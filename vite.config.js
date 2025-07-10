import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/loopwave/' : '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  publicDir: 'public',
  assetsInclude: ['**/*.mp4', '**/*.webp', '**/*.png'],
  define: {
    __BASE_URL__: process.env.NODE_ENV === 'production' ? '"/loopwave/"' : '"/"'
  }
}) 