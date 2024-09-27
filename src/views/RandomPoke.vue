<template>

    <div class="container">
        <div class="bg-green content-box items-center justify-center">
            <!-- Se activa la funcion creada a partir de dar click en el boton -->
            <button
                class="bg-blue-900 text-black font-bold text-lg rounded-md p-4 hover:bg-red-800 hover:text-white hover:text-xl shadow-md hover:shadow-2xl transition-all duration-300"
                @click="pokemonRandom">
                {{ nameButton}}
            </button>
            <div v-if="name">
                <p class="text-3xl mt-2">Pokemon número: -{{ pokemonID }}-</p>
                <p class="text-3xl m-4">Pokemon: <label
                        class="text-5xl text-bold-100 bg-blue-700 text-white shadow-xl mt-4">{{ name }}</label> </p>
                <img :src="image" alt="Answer Image" width="400px" class="mt-10" />
            </div>
        </div>
    </div>

</template>

<script setup>

import { ref } from "vue";
import axios from "axios";

const pokemonID = ref("");
const name = ref("");
const image = ref("");
const nameButton = ref("Mostrar Pokémon");

const pokemonRandom = async () => {
    // Generar un ID aleatorio entre 1 y 1010 (cantidad de Pokémon actuales)
    const randomID = Math.floor(Math.random() * 1010) + 1;
    pokemonID.value = randomID;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID.value}`);
        const pokeApi = response.data;
        name.value = pokeApi.name;
        image.value = pokeApi.sprites.front_default;
        
        nameButton.value = 'Nuevo Pokémon';
    } catch (e) {
        console.error("Error obtenido: " + e)
    }
}


</script>

<style>
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