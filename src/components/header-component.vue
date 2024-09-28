<template>
  <header >
    <div>
      <RouterLink :to="{ name: 'Home' }" class="flex items-center gap-2 font-semibold">
        <img alt="Vue logo" class="logo" src="@/assets/img/logo.png" width="40" height="40" />
      </RouterLink>
    </div>
    <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
      <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
      <RouterLink :to="{ name: 'Info' }"> PokeInfo </RouterLink>
      <RouterLink :to="{ name: 'Random' }"> Random Poke </RouterLink>
      <RouterLink :to="{ name: 'Contact' }"> Contact </RouterLink>
      <button @click="logOut"> Cerrar Sesión</button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import router from '@/router/router';
import { firebase } from '@/utils/firebase.service';

const logOut = () => {
  firebase.signOut().then((res) => {
    setTimeout(() => {
      router.push({name: 'Login'});
    }, 500);
  })
}
</script>