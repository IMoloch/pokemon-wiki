<template>
  <header>
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
      <button @click="logOut">
        <svg color="red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import router from '@/router/router';
import { Firebase } from '@/utils/firebase.service';

const firebase = new Firebase();

const logOut = () => {
  firebase.signOut();
};
</script>
