import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import Checker from 'vite-plugin-checker';
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    Checker({
      overlay: true,
      typescript: true,
    }),
    imagetools()
  ]
})
