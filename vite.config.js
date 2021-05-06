import Vue from '@vitejs/plugin-vue';
import ViteComponents from 'vite-plugin-components';

module.exports = {
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
