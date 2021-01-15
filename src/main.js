import { createApp } from 'vue';
import VueClickAway from 'vue3-click-away';
import App from './App.vue';
import i18n from './i18n';
import router from './router';

createApp(App)
  .use(VueClickAway)
  .use(router)
  .use(i18n)
  .mount('#app');
