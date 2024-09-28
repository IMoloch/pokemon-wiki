<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Registro</h2>
    <form @submit.prevent="registerUser">
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
      <button class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Registrarse</button>
    </form>
    <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
    <router-link class="text-blue-500 mt-4 inline-block" :to="{ name: 'Login' }">Ya tienes cuenta? Inicia sesión</router-link>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/router';
import { firebase } from '@/utils/firebase.service';
import { ref } from 'vue';

const user = ref<User>({ email: '', password: '' });
const message = ref<string>('');

const registerUser = () => {
  firebase
    .signUp(user.value as User)
    .then((res) => {
      message.value = 'Registro exitoso. Redirigiendo a inicio de sesión...';
      setTimeout(() => {
        router.push({ name: 'Home' });
      }, 2000);
    })
    .catch((error) => console.log(error));
};
</script>
