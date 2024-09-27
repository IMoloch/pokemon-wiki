<template>
  <div class="flex flex-col h-screen">
    <headerComponent class="flex items-center h-14 px-4 border-b-2 border-gray-300 sm:h-16 md:px-6 lg:px-8" />
    <div class="text-gray-600 body-font relative flex-1 flex overflow-auto">
      <div class="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contáctanos</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Mandanos un mensaje para ponerte en contácto con nosotros</p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              v-model="message"
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" @click="sendMail">
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import headerComponent from '@/components/header-component.vue';
import axios from 'axios';
import { ref } from 'vue';

const email = ref('');
const message = ref('');

const sendMail = async () => {
  const body = {
    email: email.value,
    message: message.value,
  };
  await axios
    .post(import.meta.env.VITE_EMAIL_BASEURL + '/api/email', body)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
