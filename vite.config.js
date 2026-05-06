/**
 * Vite configuration for Vue 3 project
 * Configures the build tool and Vue plugin
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // Enable Vue 3 Single File Component support
  plugins: [vue()],
  // Base public path for deployment
  base: '/portfolio-meta/'
})
