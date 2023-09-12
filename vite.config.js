import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';
import autoprefixer from 'autoprefixer';

const variablePath = normalizePath(path.resolve('./src/styles/global.less'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${variablePath}";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions']
        })
      ]
    }
  }
});
