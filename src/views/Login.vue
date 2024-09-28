<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <form @submit.prevent="loginUser">
        <div class="mb-4">
          <label class="block text-sm font-medium" for="email">Correo electrónico:</label>
          <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="email" v-model="email" required />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium" for="password">Contraseña:</label>
          <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="password" v-model="password" required />
        </div>
        <button class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Iniciar Sesión</button>
      </form>
      <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
      <router-link class="text-blue-500 mt-4 inline-block" to="/singup">No tienes cuenta? Regístrate</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        message: '',
      };
    },
    methods: {
      loginUser() {
        // Lógica para iniciar sesión
        this.message = 'Inicio de sesión exitoso. Redirigiendo a la página de inicio...';
        setTimeout(() => {
          this.$router.push('/home');
        }, 2000);
      },
    },
  };
  </script>
  