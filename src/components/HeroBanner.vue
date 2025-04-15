<template>
    <section class="relative bg-gray-900 text-white overflow-hidden">
      <!-- Subtle Blueprint Background -->
      <div class="absolute inset-0 bg-[url('/images/blueprint-grid.svg')] opacity-5 bg-center bg-cover pointer-events-none z-0"></div>
  
      <div class="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Side: Text Content -->
         
      <img
            src="../assets/mainblur.png"
            alt="Hero Visual"
            class="absolute hidden sm:block right-0 max-w-2xl w-auto h-full object-cover"
        />  
        
        <div class="space-y-6 z-10">
          <p class="text-blue-400 uppercase tracking-wide font-semibold">// Changing the way we do business</p>
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
            Humanity First
          </h1>
          <p class="text-lg text-gray-300 max-w-lg">
            We are a collective of professional software engineers with more than 10 years of experience in delivering superior products.
          </p>
  
          <div class="mt-8 flex flex-wrap items-center gap-5">
            <a href="/aboutbld" class="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full transition shadow-md">Learn More About Us</a>
  
            <!-- <button class="flex items-center gap-3 group">
              <div class="h-12 w-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-blue-500 transition">
                ▶
              </div>
              <span class="text-sm text-white group-hover:underline">Video Showcase</span>
            </button> -->
          </div>
        </div>
  
        <!-- Right Side: Image -->
        <div class="relative flex justify-end">
        <div class="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl z-0"></div>
       
        </div>
        </div>
    
    </section>

  <!-- three services section -->
  <section class="relative z-20 -mt-12 px-6  pb-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="relative bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out will-change-transform overflow-hidden">
        <div class="absolute -top-8 -right-8 h-24 w-24 bg-white/10 rounded-full flex items-center justify-center ">
          <component :is="icons.layout" class="h-5 w-5 text-white" />
        </div>
        <h3 class="text-base font-semibold mb-1">Custom Software Development</h3>
        <p class="text-sm text-white/90">Tailored applications designed for your unique business goals and workflows.</p>
      </div>

      <div class="relative bg-gradient-to-r from-blue-700 to-sky-500 text-white p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out will-change-transform overflow-hidden">
        <div class="absolute -top-8 -right-8 h-24 w-24 bg-white/10 rounded-full flex items-center justify-center">
          <component :is="icons.chart" class="h-5 w-5 text-white" />
        </div>
        <h3 class="text-base font-semibold mb-1">Outsource Your Development</h3>
        <p class="text-sm text-white/90">Extend your dev team with our skilled engineers and trusted delivery processes.</p>
      </div>

      <div class="relative bg-gradient-to-r from-cyan-500 to-blue-400 text-white p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out will-change-transform overflow-hidden">
        <div class="absolute -top-8 -right-8 h-24 w-24 bg-white/10 rounded-full flex items-center justify-center">
          <component :is="icons.bolt" class="h-5 w-5 text-white" />
        </div>
        <h3 class="text-base font-semibold mb-1">Software Product Development</h3>
        <p class="text-sm text-white/90">From idea to MVP — we build product-ready solutions that scale.</p>
      </div>
    </div>
  </section>
  </template>
  
  <script setup>
  import { ChartBarIcon, ViewGridIcon, LightningBoltIcon } from '@heroicons/vue/outline'
  
  const icons = {
    layout: ViewGridIcon,
    chart: ChartBarIcon,
    bolt: LightningBoltIcon,
  }
  </script>
  