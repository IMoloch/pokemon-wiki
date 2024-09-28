<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4">Registro</h2>
    <form @submit.prevent="registerUser">
      <div class="mb-4">
        <label class="block text-sm font-medium" for="username">Nombre de usuario:</label>
        <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="text" v-model="username" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium" for="email">Correo electrónico:</label>
        <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="email" v-model="email" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium" for="password">Contraseña:</label>
        <input class="mt-1 block w-full p-2 border border-gray-300 rounded" type="password" v-model="password" required />
      </div>
      <button class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Registrarse</button>
    </form>
    <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
    <router-link class="text-blue-500 mt-4 inline-block" to="/">Ya tienes cuenta? Inicia sesión</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    registerUser() {
      // Lógica para registrar al usuario
      this.message = 'Registro exitoso. Redirigiendo a inicio de sesión...';
      setTimeout(() => {
        this.$router.push('/');
      }, 2000);
    },
  },
};
</script>
