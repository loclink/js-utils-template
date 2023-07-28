import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
export default defineConfig({
  build: {
    lib: {
      entry: './src/modules/index.ts',
      name: 'JsUtils',
      fileName: format => `index.${format === 'umd' ? 'min.js' : 'js'}`
    },
  },
  plugins: [dts()]
});
