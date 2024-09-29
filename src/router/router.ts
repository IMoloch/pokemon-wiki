import Contact from '@/views/ContactPage.vue';
import HomePage from '@/views/HomePage.vue';
import Login from '@/views/LoginPage.vue';
import PokeInfo from '@/views/PokeInfo.vue';
import RandomPoke from '@/views/RandomPoke.vue';
import Signup from '@/views/SignupPage.vue';
import { Firebase } from '@/utils/firebase.service';
import { createWebHistory, createRouter } from 'vue-router';

const firebase = new Firebase();

const routes = [
  { path: '/', component: Login, name: 'Login' },
  { path: '/signup', component: Signup, name: 'Signup' },
  { path: '/home', component: HomePage, name: 'Home', meta: { requiresAuth: true } },
  { path: '/contact', component: Contact, name: 'Contact', meta: { requiresAuth: true } },
  { path: '/pokeinfo/:id?', component: PokeInfo, name: 'Info', meta: { requiresAuth: true } },
  { path: '/random', component: RandomPoke, name: 'Random', meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const isAuth = await firebase.getAuth();
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (!isAuth) return { name: 'Login' }
  } else {
    if (isAuth) return { name: 'Home'}
  }
});

export default router;
