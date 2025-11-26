import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],

  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      //"@types": path.resolve(__dirname, "./types"),
    },
  },
});
