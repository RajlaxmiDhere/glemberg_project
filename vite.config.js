import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // This matches the port in your screenshot
    open: true, // Automatically opens the browser when you start the server
  }
})
