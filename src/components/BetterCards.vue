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
import AngelImg from '../assets/Angel_investment.jpg'
import PartnershipImg from '../assets/strategic_Partnership.jpg'
import SponsorshipImg from '../assets/Corporate_sponsorship.jpg'
import DonationImg from '../assets/Donations.jpg'
import GiftingImg from '../assets/Gifting.jpg'
import PerksImg from '../assets/perks_works.jpg'


const options = [
  {
    title: 'Angel Investment',
    slug: 'angel-investment',
    description: 'Provide capital in exchange for equity and be part of our growth journey.',
    image: AngelImg,
  },
  {
    title: 'Strategic Partnership',
    slug: 'strategic-partnership',
    description: 'Collaborate with us for mutual benefits and shared success.',
    image: PartnershipImg,
  },
  {
    title: 'Corporate Sponsorship',
    slug: 'corporate-sponsorship',
    description: 'Sponsor our initiatives and gain prominent recognition.',
    image: SponsorshipImg,
  },
  {
    title: 'Philanthropic Donation',
    slug: 'philanthropic-donation',
    description: 'Support our mission with charitable contributions.',
    image: DonationImg,
  },
  {
    title: 'Gifting & Recurring Support',
    slug: 'gifting-recurring-support',
    description: 'Provide ongoing support through gifts or recurring contributions.',
    image: GiftingImg,
  },
  {
    title: 'Perks for Works',
    slug: 'perks-for-works',
    description: 'Got something to offer? Let’s trade. Provide your product, service, or space — and we’ll return the favor with design, development, or strategy work.',
    image: PerksImg,
  },
]

</script>

  