<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <div
        v-for="option in options"
        :key="option.title"
        class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
      >
        <img :src="option.image" :alt="option.title" class="w-full h-48 object-cover  " />
        <div class="p-6 flex flex-col justify-between h-full">
          <div>
            <h3 class="text-xl font-semibold mb-2">{{ option.title }}</h3>
            <p class="text-gray-700 text-sm">{{ option.description }}</p>
          </div>
          <div class="mt-4">
            <a :href="`/investors/${option.slug}`" class="text-blue-600 font-medium hover:underline inline-flex items-center gap-1">
              Learn More
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>

import PartnershipImg from '../assets/strategic_Partnership.jpg'
import SponsorshipImg from '../assets/Corporate_sponsorship.jpg'
import DonationImg from '../assets/Donations.jpg'


const options = [
  {
    title: 'Partnership',
    slug: 'strategic-partnership',
    description: 'Collaborate with us for mutual benefits and shared success.',
    image: PartnershipImg,
  },
  {
    title: 'Sponsorship',
    slug: 'corporate-sponsorship',
    description: 'Sponsor our initiatives and gain prominent recognition.',
    image: SponsorshipImg,
  },
  {
    title: 'Donations',
    slug: 'philanthropic-donation',
    description: 'Support our mission with charitable contributions.',
    image: DonationImg,
  },
]

</script>

  