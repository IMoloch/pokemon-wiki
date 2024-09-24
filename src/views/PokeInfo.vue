<template>
  <div>
    <p>{{ pokemon.name }}</p>
    <img :src="pokemon.image" />
    <p>{{ pokemon.stats }}</p>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

interface Pokemon {
  name: string,
  image: string,
  stats: Stat[]
}

interface Stat {
  base_stat: number,
  name: string,
}

const pokemon = ref<Pokemon>({ name: '', image: '', stats: [] })
const route = useRoute()
let id = ref(route.params.id)

onMounted (async () => {
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id.value}`)
    .then ((res) => {
      const { name, sprites: {other: { home: {front_default}}}, stats } = res.data
      
      const baseStats = stats.map(({base_stat, stat: { name }}) => ({ base_stat, name }))
      pokemon.value = { name, image: front_default, stats: baseStats}
    })
    .catch((err) => {
      console.log(err);
    })
})
</script>