import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // vite.config.js
  plugins: [react()],
  // vite.config.js
  server: {
    host: '0.0.0.0', // or your specific IP address
    port: 3000 // or your desired port
  }
})