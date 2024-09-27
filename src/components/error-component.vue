<template>
  <div class="text-center items-center justify-center">
    <p class="text-base font-semibold text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página no encontrada</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Lo siento, ha ocurrido un error.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <button @click="routeHome" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Button>
    </div>  
  </div>
</template>

<script setup lang="ts">
import router from '@/router/router';

const routeHome = () => router.push({ name: 'Login' })
</script>