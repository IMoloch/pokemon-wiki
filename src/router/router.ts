import Contact from '@/views/ContactPage.vue'
import HomePage from '@/views/HomePage.vue'
import Login from '@/views/LoginPage.vue'
import PokeInfo from '@/views/PokeInfo.vue'
import RandomPoke from '@/views/RandomPoke.vue'
import Singup from '@/views/SingupPage.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/home', component: HomePage, name:  'Home'},
  { path: '/contact', component: Contact, name:  'Contact'},
  { path: '/pokeinfo', component: PokeInfo, name:  'Info'},
  { path: '/', component: Login, name:  'Login'},
  { path: '/singup', component: Singup , name: 'Singup'},
  { path: '/random', component: RandomPoke, name:  'Random'},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router