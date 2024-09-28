<template>
  <div class="flex flex-col h-screen">
    <headerComponent class="flex items-center h-14 px-4 border-b-2 border-gray-300 sm:h-16 md:px-6 lg:px-8" />
    <div class="container">
      <div class="bg-green content-box items-center justify-center">
        <!-- Se activa la funcion creada a partir de dar click en el boton -->
        <button
          class="bg-blue-900 text-black font-bold text-lg rounded-md p-4 hover:bg-red-800 hover:text-white hover:text-xl shadow-md hover:shadow-2xl transition-all duration-300"
          @click="pokemonRandom"
        >
          {{ nameButton }}
        </button>
        <div v-if="name">
          <p class="text-3xl mt-2">Pokemon número: -{{ pokemonID }}-</p>
          <p class="text-3xl m-4">
            Pokemon: <label class="text-5xl text-bold-100 bg-blue-700 text-white shadow-xl mt-4">{{ name }}</label>
          </p>
          <button>
            <img @click="pokeInfoRouter" :src="image" alt="Answer Image" width="400px" class="mt-10" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/router';
import { ref } from 'vue';
import axios from 'axios';
import headerComponent from '@/components/header-component.vue';

const pokemonID = ref('');
const name = ref('');
const image = ref('');
const nameButton = ref('Mostrar Pokémon');

const pokemonRandom = async () => {
  // Generar un ID aleatorio entre 1 y 1010 (cantidad de Pokémon actuales)
  const randomID = Math.floor(Math.random() * 1025) + 1;
  pokemonID.value = randomID.toString();
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID.value}`);
    const pokeApi = response.data;
    name.value = pokeApi.name;
    image.value = pokeApi.sprites.front_default;

    nameButton.value = 'Nuevo Pokémon';
  } catch (e) {
    console.error('Error obtenido: ' + e);
  }
};

const pokeInfoRouter = () => router.push({ name: 'Info', params: { id: pokemonID.value } });
</script>

<style scoped>
.container {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  /* Ajustamos el tamaño para dejar espacio para el footer */
  max-width: 100%;
  /*Para que el tamaño del contenido quede bien centrado*/
}

/* Estilo para el recuadro verde */
.content-box {
  padding: 10px;
  background-color: #41c4a7;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 690px;
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
