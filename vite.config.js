import path from 'path';
import Vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  assetsInlineLimit: 1,
  css: {
    scopeBehavior: 'global',
    globalModulePaths: ['./src/assets/css'],
  },
  plugins: [
    Vue(),
    ViteComponents(),
  ],
};
