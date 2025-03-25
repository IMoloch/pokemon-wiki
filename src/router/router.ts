import HomePage from '@/views/HomePage.vue';
import PokeInfo from '@/views/PokeInfo.vue';
import RandomPoke from '@/views/RandomPoke.vue';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: HomePage, name: 'Home', meta: { requiresAuth: true } },
  { path: '/pokeinfo/:id?', component: PokeInfo, name: 'Info', meta: { requiresAuth: true } },
  { path: '/random', component: RandomPoke, name: 'Random', meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
