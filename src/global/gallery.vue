<template>

<section class="bg-white py-16 px-4 sm:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-2">The Blueline Look</h2>
        <p class="text-lg text-gray-600">Smart. Sharp. Team-first.</p>
      </div>

      <!-- Responsive Grid Gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        <!-- Each Image Card -->
        <div v-for="(item, index) in gallery" :key="index" class="relative overflow-hidden rounded-lg shadow group transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
          <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import arizona_office from '../assets/ads/arizona_office.png';
import houston_merch from '../assets/ads/houston_merch.png';
import plaqard from '../assets/ads/plaqard.png';
import chatting_afterwork from '../assets/ads/chatting_afterwork.png';
import diagram from '../assets/ads/thecollective.png';
import conference from '../assets/ads/conference.png';
import arizona_downtown from '../assets/ads/arizona_downtown.png';

const gallery = [
  {
    src: arizona_office,
    alt: 'Story',
    label: 'Instagram Story',
  },
  {
    src: houston_merch,
    alt: 'Cover',
    label: 'Cover Photo',
  },
  {
    src: plaqard,
    alt: 'Profile',
    label: 'Profile Photo',
  },
  {
    src: chatting_afterwork,
    alt: 'Feed Post',
    label: 'Feed Post',
  },
  {
    src: diagram,
    alt: 'Fundraiser',
    label: 'Fundraiser Image',
  },
  {
    src: conference,
    alt: 'Facebook Ad',
    label: 'Facebook Ad',
  },
  {
    src: arizona_downtown,
    alt: 'Carousel',
    label: 'Carousel Post',
  },
];
  </script>
  
  <style scoped>
 .group:hover img {
  filter: brightness(0.9);
}
  </style>