import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
export default defineConfig({
  root: 'src',
  plugins: [tailwindcss()],
  server: {
    open: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
