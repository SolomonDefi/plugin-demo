import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/views/Home.vue';
import StorePage from '/src/components/StorePage.vue';
import Checkout from '/src/components/Checkout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Solomon Plugin' },
      children: [
        {
          path: '',
          redirect: 'mens',
        },
        {
          path: 'mens',
          name: 'mens',
          component: StorePage,
          meta: { title: 'Mens\'s Store' },
        },
        {
          path: 'womens',
          name: 'womens',
          component: StorePage,
          meta: { title: 'Womens\'s Store' },
        },
        {
          path: 'accessories',
          name: 'accessories',
          component: StorePage,
          meta: { title: 'Accessories Store' },
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: Checkout,
          meta: { title: 'SolomonCheckout' },
        }
      ],
    },
  ],
});

router.afterEach((to, _from) => {
  const parentTitle = to.matched.some(record => record.meta.title);
  document.title = to.meta.title || parentTitle || 'Solomon';
});

export default router;
