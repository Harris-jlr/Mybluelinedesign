import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': '/src' },
  },
  base: '/', // Adjust based on deployment path
  build: {
    rollupOptions: {
      output: {
        manualChunks: { vendor: ['vue', 'vue-router'] },
      },
    },
  },
  server: {
    port: 5173 // 👈 force Vite to run on 5173 instead of 3000
  }
})