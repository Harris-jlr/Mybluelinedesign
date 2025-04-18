<template>
    <section class="relative py-2 overflow-hidden">
      <!-- Subtle translucent background -->
      <div class="absolute inset-0 bg-blue-500/80 blur-xl shadow-xl opacity-30 pointer-events-none"></div>
  
      <div class="relative z-10 max-w-7xl mx-auto text-center mb-12">
        <h2 class="text-2xl font-semi text-gray-800 mb-4"></h2>
      </div>
  
      <!-- Row 1 -->
      <div class="overflow-hidden whitespace-nowrap mb-6">
        <div class="inline-flex animate-marquee gap-16">
          <img v-for="client in row1" :key="client.name" :src="client.logo" :alt="client.name" class="h-10 object-contain hover:grayscale-0 transition duration-300"
          />
          <!-- duplicate for seamless loop -->
          <img v-for="client in row1" :key="client.name + '-duplicate'" :src="client.logo" :alt="client.name" class="h-10 object-contain hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </section>
  </template>

<script setup>
import McKesson from '../assets/logos/mckesson.png'
import FleetPride from '../assets/logos/fleetpride2.png'
import Tenet from '../assets/logos/tenet.png'
import ADI from '../assets/logos/adi.png'
import Barrios from '../assets/logos/nasa.png'
import Magellan from '../assets/logos/magellan.png'
import WesternSouthern from '../assets/logos/wS.png'
import BioTechne from '../assets/logos/biotechne.png'
import SSHealth from '../assets/logos/sands.png'
import Usaf from '../assets/logos/usaf.png'

const row1 = [
  { name: 'McKesson', logo: McKesson },
  { name: 'FleetPride', logo: FleetPride },
  { name: 'Tenet Health', logo: Tenet },
  { name: 'ADI Global', logo: ADI },
  { name: 'Barrios Tech', logo: Barrios },
  { name: 'Magellan Health', logo: Magellan },
  { name: 'Western & Southern', logo: WesternSouthern },
  { name: 'BioTechne', logo: BioTechne },
  { name: 'S&S Health', logo: SSHealth },
  { name: 'United States Air Force', logo: Usaf },
]

</script>

<style scoped>
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee-reverse {
  0%   { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

.animate-marquee {
  display: inline-flex;
  min-width: 200%; /* Ensures two sets fit side-by-side */
  animation: marquee 30s linear infinite;
}

.animate-marquee-reverse {
  display: inline-flex;
  min-width: 200%;
  animation: marquee-reverse 40s linear infinite;
}

</style>