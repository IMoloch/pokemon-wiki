<template>
  <div class="flex flex-col h-screen">
    <headerComponent class="flex items-center h-14 px-4 border-b-2 border-gray-300 sm:h-16 md:px-6 lg:px-8" />
    <!-- COMPONENTE DE ERROR -->
    <div v-if="errorStatus && !loading" class="flex flex-1 items-center justify-center">
      <errorComponent />
    </div>
    <!-- BUSCADOR DE POKEMON -->
    <div v-if="!route.params.id && !errorStatus && !loading" class="flex flex-col flex-1 items-center justify-center">
      <form @submit.prevent="searchPokemon(searchInput)">
        <label for="pokemon" class="block text-2xl font-medium leading-6">Buscar Pokemon por Nombre o #Pokedex</label>
        <div class="mt-2 rounded-md shadow-sm">
          <input
            v-model="searchInput"
            id="pokemon"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset text-[var(--color-background)] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Bulbasaur | 1"
          />
        </div>
      </form>
    </div>

    <!-- COMPONENTE PRINCIPAL MOSTRAR DATOS DE POKEMON -->
    <div v-if="route.params.id && !errorStatus && !loading" class="py-5 sm:py-5 flex-1 overflow-auto">
      <div class="mx-auto max-w-2xl px-6 lg:max-w-full lg:px-8">
        <div class="flex">
          <button @click="goPrevious(pokemon.id - 1)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
              />
            </svg>
          </button>
          <p class="mx-auto mt-2 max-w-lg text-pretty text-4xl font-medium capitalize tracking-tight sm:text-5xl">
            {{ pokemon.name }} - # {{ pokemon.id }}
          </p>
          <button @click="goNext(pokemon.id + 1)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-4 sm:mt-8 lg:grid-cols-3 lg:grid-rows-1">
          <div class="relative">
            <div class="relative inset-px rounded-lg bg-[var(--color-background)] lg:rounded-l-[2rem]"></div>
            <div class="relative flex h-full flex-col overflow-auto rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div class="flex justify-center px-8 pb-3 pt-8 sm:px-8 sm:pb-0 sm:pt-10">
                <div v-for="(type, id) in pokemon.types" :key="id">
                  <img class="mx-3" :src="type.imgUrl" />
                </div>
              </div>
              <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <img class="object-top py-6 sm:size-full lg:p-12" :src="pokemon.image" alt="" />
              </div>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow-xl ring-2 ring-[var(--color-contrast)] max-lg:rounded-b-[2rem] lg:rounded-l-[2rem]"
            ></div>
          </div>

          <div class="relative">
            <div
              class="relative flex items-center justify-center h-full flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]"
            >
              <p class="mt-2 text-lg/7 font-medium tracking-tight">Bueno contra</p>
              <div class="flex justify-center flex-wrap px-1 pb-3 pt-2 mb-4 sm:px-1 sm:pb-0 sm:pt-2">
                <div v-for="(enemyType, id) in pokemon.matchUps" :key="id">
                  <img class="m-1" :src="enemyType.imgUrl" v-if="enemyType.score > 0" />
                </div>
              </div>
              <p class="mt-2 text-lg/7 font-medium tracking-tight">Neutro contra</p>
              <div class="flex justify-center flex-wrap px-1 pb-3 mb-4 pt-2 sm:px-1 sm:pb-0 sm:pt-2">
                <div v-for="(enemyType, id) in pokemon.matchUps" :key="id">
                  <img class="m-1" :src="enemyType.imgUrl" v-if="enemyType.score == 0" />
                </div>
              </div>
              <p class="mt-2 text-lg/7 font-medium tracking-tight">Débil contra</p>
              <div class="flex justify-center flex-wrap px-1 pb-3 mb-4 pt-2 sm:px-1 sm:pb-0 sm:pt-2">
                <div v-for="(enemyType, id) in pokemon.matchUps" :key="id">
                  <img class="m-1" :src="enemyType.imgUrl" v-if="enemyType.score < 0" />
                </div>
              </div>
            </div>
            <div class="pointer-events-none absolute inset-px rounded-lg shadow-xl ring-2 ring-[var(--color-contrast)] max-lg:rounded-t-[2rem]"></div>
          </div>

          <div class="relative">
            <div class="relative inset-px rounded-lg max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div
              class="relative flex items-center justify-center h-full flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
            >
              <div class="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p class="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">Stats</p>
              </div>
              <div class="relative min-h-[30rem] w-full grow justify-center items-center flex px-4">
                <bar class="min-h-[80%]" v-if="chartData && chartOptions" :data="chartData" :options="chartOptions"></bar>
              </div>
            </div>
            <div
              class="pointer-events-none absolute inset-px rounded-lg shadow-xl ring-2 ring-[var(--color-contrast)] max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, scales, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';
import { useRoute } from 'vue-router';
import { PokemonService } from '@/utils/pokemon.services';
import errorComponent from '@/components/error-component.vue';
import headerComponent from '@/components/header-component.vue';
import router from '@/router/router';

const route = useRoute();
const PokemonSvc = new PokemonService();
const pokemon = ref<Pokemon>({ id: 0, name: '', image: '', stats: [], types: [] });
const errorStatus = ref(false);
const loading = ref(true);
const searchInput = ref('');

const fetchPokemon = (pokeId: string | string[]) => {
  loading.value = true;
  PokemonSvc.getFormattedData(pokeId)
    .then((data) => {
      pokemon.value = data;
      renderGraph();
    })
    .catch((error) => {
      console.error('Error fetching Pokemon:', error);
      errorStatus.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales);
const chartData = ref();
const chartOptions = ref();
let style = ref(getComputedStyle(document.body));
let contrastColor = ref(style.value.getPropertyValue('--color-contrast'));

const renderGraph = () => {
  chartData.value = {
    labels: pokemon.value.stats.map((stat) => stat.name),
    datasets: [
      {
        label: 'Stat',
        backgroundColor: pokemon.value.stats.map((stat) => {
          if (stat.base_stat < 40) return '#ff0000';
          if (stat.base_stat < 60) return '#ff9933';
          if (stat.base_stat < 80) return '#ffcc00';
          if (stat.base_stat < 100) return '#ffff66';
          if (stat.base_stat < 120) return '#66ff33';
          return '#00ff99';
        }),
        data: pokemon.value.stats.map((stat) => stat.base_stat),
      },
    ],
  };

  chartOptions.value = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        max: 260,
        grid: {
          display: false,
          color: contrastColor.value,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: true,
          color: contrastColor.value,
        },
        border: {
          display: true,
          color: contrastColor.value,
        },
      },
    },
  };
};

watch(
  () => route.params.id,
  (newId) => {
    console.log(newId);

    if (newId !== undefined && newId !== null) fetchPokemon(newId);
    errorStatus.value = false;
  },
);

const goPrevious = (prevId: any) => router.push({ name: 'Info', params: { id: prevId } });
const goNext = (nextId: any) => router.push({ name: 'Info', params: { id: nextId } });
const searchPokemon = (searchInput: any) => router.push({ name: 'Info', params: { id: searchInput } });

onMounted(() => {
  route.params.id ? fetchPokemon(route.params.id) : (loading.value = false);
});
</script>
