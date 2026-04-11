import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    vue({
      customElement: true,
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('app-')
        }
      },
    }),
    react(),
    tsconfigPaths({ loose: true }),
    tailwindcss(),
  ],
  server: {
    cors: false,
    proxy: {
      '/api': {
        target: 'https://127.0.0.1:3000',
        secure: false,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,''),
      },
    },
  },
});
