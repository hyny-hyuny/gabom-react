import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/gabom-react/',
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
    host: 'localhost',
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
