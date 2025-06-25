import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/clinix.github.io/', // Публикация в корень
  plugins: [react()],
})
