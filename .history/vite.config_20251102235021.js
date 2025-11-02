import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ems-frontend/",  // ✅ Add this line
  server: {
    port: 3000,
  },
})
