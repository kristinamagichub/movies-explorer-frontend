import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/components',
        replacement: '/src/components',
      },
      // "@assets": path.resolve(__dirname, "src/assets"),

      {
        find: '@/assets',
        replacement: '/src/assets',
      },
      {
        find: '@/pages',
        replacement: '/src/pages',
      },
      {
        find: '@/utils',
        replacement: '/src/utils',
      },
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    target: 'es2022',
  },
});
