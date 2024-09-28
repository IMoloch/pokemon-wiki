<template>
  <div class="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Iniciar Sesión</h2>
    <form @submit.prevent="loginUser">
      <div class="mb-4">
        <label class="block text-sm font-medium" for="email">Correo electrónico:</label>
        <input
          class="mt-1 block w-full p-2 border text-[var(--color-background)] border-gray-300 rounded"
          type="email"
          v-model="user.email"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium" for="password">Contraseña:</label>
        <input
          class="mt-1 block w-full p-2 border text-[var(--color-background)] border-gray-300 rounded"
          type="password"
          v-model="user.password"
          required
        />
      </div>
      <button class="w-full bg-blue-500 p-2 rounded hover:bg-blue-600" type="submit">Iniciar Sesión</button>
    </form>
    <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
    <router-link class="text-blue-500 mt-4 inline-block" :to="{ name: 'Singup' }">No tienes cuenta? Regístrate</router-link>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/router';
import { firebase } from '@/utils/firebase.service';
import { ref } from 'vue';

const user = ref<User>({ email: '', password: '' });
const message = ref<string>('');

const loginUser = () => {
  firebase
    .signIn(user.value as User)
    .then((res) => {
      message.value = 'Inicio de sesión exitoso. Redirigiendo a la página de inicio...';
      setTimeout(() => {
        router.push({ name: 'Home' });
      }, 2000);
    })
    .catch((error) => console.log(error));
};
</script>
