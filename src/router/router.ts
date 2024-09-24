import Contact from '@/views/ContactPage.vue'
import HomePage from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'
import PokeInfo from '@/views/PokeInfo.vue'
import RandomPoke from '@/views/RandomPoke.vue'
import Singup from '@/views/SingupPage.vue'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component: HomePage, name:  'Home'},
  { path: '/contact', component: Contact, name:  'Contact'},
  { path: '/pokeinfo/:id?', component: PokeInfo, name:  'Info'},
  { path: '/login', component: Login, name:  'Login'},
  { path: '/singup', component: Singup , name: 'Singup'},
  { path: '/random', component: RandomPoke, name:  'Random'},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router