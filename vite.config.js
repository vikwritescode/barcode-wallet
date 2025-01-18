import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/barcode-wallet/"
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  }
})


