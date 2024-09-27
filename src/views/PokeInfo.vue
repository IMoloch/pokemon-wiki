<template>
  <div class="py-5 sm:py-5 flex-1 justify-center">
    <errorComponent v-if="errorStatus"></errorComponent>
    <div v-if="route.params.id && !errorStatus && !loading" class="mx-auto max-w-2xl px-6 lg:max-w-full lg:px-8">
      <p class="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium capitalize tracking-tight sm:text-5xl">
        {{ pokemon.name }}
      </p>
      <div class="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3 lg:grid-rows-1">
        <div class="relative">
          <div class="relative inset-px rounded-lg bg-[var(--color-background)] lg:rounded-l-[2rem]"></div>
          <div class="relative flex h-full flex-col overflow-auto rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="flex justify-center px-8 pb-3 pt-8 sm:px-8 sm:pb-0 sm:pt-10">
              <div v-for="(type, id) in pokemon.types" :key="id">
                <img class="mx-3" :src="type.imgUrl" />
              </div>
            </div>
            <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
              <img class="size-full object-cover object-top" :src="pokemon.image" alt="" />
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
            <p class="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">Bueno contra</p>
            <div class="flex justify-center flex-wrap px-1 pb-3 pt-2 mb-4 sm:px-1 sm:pb-0 sm:pt-2">
              <div v-for="(enemyType, id) in pokemon.matchUps" :key="id">
                <img class="m-1" :src="enemyType.imgUrl" v-if="enemyType.score > 0" />
              </div>
            </div>
            <p class="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">Neutro contra</p>
            <div class="flex justify-center flex-wrap px-1 pb-3 mb-4 pt-2 sm:px-1 sm:pb-0 sm:pt-2">
              <div v-for="(enemyType, id) in pokemon.matchUps" :key="id">
                <img class="m-1" :src="enemyType.imgUrl" v-if="enemyType.score == 0" />
              </div>
            </div>
            <p class="mt-2 text-lg/7 font-medium tracking-tight max-lg:text-center">Débil contra</p>
            <div class="flex justify-center flex-wrap px-1 pb-3 mb-4 pt-2 sm:px-1 sm:pb-0 sm:pt-2">
              <div v-for="(enemyType, id) in pokemon.matchUps" :key="id">
                <img class="m-1" :src="enemyType.imgUrl" v-if="enemyType.score < 0" />
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow-xl ring-2 ring-[var(--color-contrast)] max-lg:rounded-t-[2rem]"></div>
        </div>

        <div class="relative">
          <div class="relative inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
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
</template>

<script setup lang="ts">
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, scales, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';
import { PokemonService } from '@/utils/pokemon.services';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import errorComponent from '@/components/error-component.vue';

const route = useRoute();
const id = ref(route.params.id);
const PokemonSvc = new PokemonService();
const pokemon = ref<Pokemon>({ name: '', image: '', stats: [], types: [] });
const errorStatus = ref(false);
const loading = ref(false);

const fetchPokemon = (id: string | string[]) => {
  loading.value = true
  PokemonSvc.getFormattedData(id)
    .then((data) => {
      pokemon.value = data;
      renderGraph();
    })
    .catch((error) => {
      console.error('Error fetching Pokemon:', error);
      errorStatus.value = true;
    }).finally(() => {
      loading.value = false
    })
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales);
const chartData = ref();
const chartOptions = ref();

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
        max: 300,
        display: 'false',
        grid: {
          display: false,
        },
      },
      x: {},
    },
  };
};

onMounted(() => {
  id.value ? fetchPokemon(id.value) : errorStatus.value=true;
});
</script>
