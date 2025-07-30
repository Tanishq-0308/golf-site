import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My React PWA',
        short_name: 'ReactPWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1a202c',
        icons: [
          {
            src: 'logoGreen.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logoGreen.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
