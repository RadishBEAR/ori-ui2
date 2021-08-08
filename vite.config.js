import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import md from 'rollup-plugin-md';
import path from 'path';

const { resolve } = path;
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: '/',
  plugins: [
    md(),
    createVuePlugin(),
  ],
});
