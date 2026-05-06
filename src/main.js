/**
 * Main entry point of the Vue 3 application
 * Initializes the app and mounts it to the DOM
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/styles/tokens.css'

// Create app instance and mount to #app element
createApp(App).mount('#app')
