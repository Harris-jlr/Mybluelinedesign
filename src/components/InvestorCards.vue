<template>
    <div class="bg-white text-gray-800">
      <!-- Engagement Options Section -->
      <section class="py-16 px-4 md:px-12 lg:px-24 bg-gray-50">
        <h2 class="text-3xl font-semibold mb-8 text-center">Ways to Support</h2>
        <p class="text-lg max-w-2xl mb-12 mx-auto text-center">
          Whether you’re an angel investor, philanthropist, or advocate for tech reform, there’s a place for you in our journey.
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card Component -->
          <div v-for="option in engagementOptions" :key="option.title" class="p-6 bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105">
            <div class="flex items-center justify-center h-16 w-16 mb-4 mx-auto">
              <component :is="option.icon" class="h-16 w-16 text-blue-500" />
            </div>
            <h3 class="text-xl font-semibold mb-2 text-center">{{ option.title }}</h3>
            <p class="text-gray-600 text-center">{{ option.description }}</p>
            <div class="mt-4 text-center">
              <a :href="option.link" class="text-blue-500 hover:underline">Learn More</a>
            </div>
          </div>
          <!-- End Card Component -->
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { defineComponent } from 'vue';
  import { AcademicCapIcon, ChartBarIcon, BriefcaseIcon, HeartIcon, GiftIcon } from '@heroicons/vue/outline';
  
  const engagementOptions = [
    {
      title: 'Angel Investment',
      description: 'Provide capital in exchange for equity and be part of our growth journey.',
      icon: AcademicCapIcon,
      link: '#angel-investment',
    },
    {
      title: 'Strategic Partnership',
      description: 'Collaborate with us for mutual benefits and shared success.',
      icon: ChartBarIcon,
      link: '#strategic-partnership',
    },
    {
      title: 'Corporate Sponsorship',
      description: 'Sponsor our initiatives and gain prominent recognition.',
      icon: BriefcaseIcon,
      link: '#corporate-sponsorship',
    },
    {
      title: 'Philanthropic Donation',
      description: 'Support our mission with charitable contributions.',
      icon: HeartIcon,
      link: '#philanthropic-donation',
    },
    {
      title: 'Gifting & Recurring Support',
      description: 'Provide ongoing support through gifts or recurring contributions.',
      icon: GiftIcon,
      link: '#gifting-recurring-support',
    },
  ];
  </script>
  
  <style scoped>
  /* Additional styles if necessary */
  </style>
  