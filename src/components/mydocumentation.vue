<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-28 bg-gray-800">
      <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
        <div class="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative max-w-7xl mx-auto pb-20 px-4 sm:py-18 sm:px-6 lg:px-8">
        <img class="max-w-lg" src="/src/assets/trinsightLogo_White.png" alt="" >
        <p class="mt-2 max-w-5xl text-xl text-gray-300">Manage your traffic more efficiently by gaining actionable insight into your fleet and freight.  With this application, you will optimize your entire supply chain.  To see more details, take a moment to view  
         <a href="/promo" class="text-base font-medium text-yellow-700 hover:text-cyan-600" target="blank">TRINSIGHT<span aria-hidden="true"> &rarr;</span></a></p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="-mt-32 max-w-7xl mx-auto relative z-10 pb-12 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <h2 class="sr-only" id="contact-heading">Contact us</h2>
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl shadow-xl">
          <div class="flex-1 relative pt-16 px-6 pb-8 md:px-8">
            <div class="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
              <component :is="link.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
          <div class=" bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
             </div>
        </div>
      </div>
    </section>
  </div>
  <planetChart/>
</template>

<script>
import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/vue/outline'
import PlanetChart from '/src/components/planetChart.vue'

const supportLinks = [
  {
    name: 'Informed Decisions',
    href: '#',
    description:
      'Your business will link to our cloud based digital hub to give you continual viewability into your cars and cargo. ',
    icon: PhoneIcon,
  },
  {
    name: 'Actionable Insights',
    href: '#',
    description:
      'Advanced Machine learning analytics provides actionable insights that allow you to make faster more efficent decisons.',
    icon: SupportIcon,
  },
  {
    name: 'Manage your Supply Chain',
    href: '#',
    description:
      'Dependable Information about your rail fleet to help you manage the supply chain of your fleet and your freight.',
    icon: NewspaperIcon,
  },
]

export default {
  setup() {
    return {
      supportLinks, 
      components: { PlanetChart },
    }
  },
}
</script>