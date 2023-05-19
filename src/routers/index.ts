import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: async () => await import('@/views/about.vue'),
  },
];

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHistory(''),
  routes,
});

export default router;
