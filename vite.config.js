import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/clinix.github.io/',  // для корректных путей к ресурсам
  plugins: [react()],
})
