import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import Checker from 'vite-plugin-checker';
import { imagetools } from 'vite-imagetools';
import ViteFonts from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    Checker({
      overlay: true,
      typescript: true
    }),
    imagetools(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Fira Sans',
            styles: 'wght@100;400;500;700'
          },
          {
            name: 'Fira Code',
            styles: 'wght@400'
          },
          {
            name: 'Fira Mono',
            styles: 'wght@400;500;700'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  }
});
