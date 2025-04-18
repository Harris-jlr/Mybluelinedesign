<template>
  <section class="bg-white py-16 px-4 sm:px-8 lg:px-16">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-2">The Blueline Look</h2>
        <p class="text-lg text-gray-600">Smart. Sharp. Team-first.</p>
      </div>

      <!-- Gallery Grid with Defined Aspect Ratios -->
      <div class="grid grid-cols-5 grid-rows-3 gap-4">
        <!-- Story -->
        <div class="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow">
          <img :src="arizona_office" alt="Story" class="w-full h-full object-cover aspect-[3/5]">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded">Instagram Story</div>
        </div>

        <!-- Cover photo -->
        <div class="col-span-3 row-span-2 relative overflow-hidden rounded-lg shadow">
          <img :src="houston_merch" alt="Cover" class="w-full h-full object-cover aspect-[16/5]">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded">Cover Photo</div>
        </div>

        <!-- Feed post -->
        <div class="col-span-2 row-span-2 relative overflow-hidden rounded-lg shadow">
          <img :src="chatting_afterwork" alt="Feed Post" class="w-full h-full object-cover aspect-[5/3]">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded">Feed Post</div>
        </div>

         <!-- Profile photo -->
        <div class="col-span-1 row-span-1 relative overflow-hidden rounded-lg shadow">
          <img :src="plaqard" alt="Profile" class="w-full h-full object-cover aspect-square">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded">Profile Photo</div>
        </div>
        
        <!-- Fundraiser -->
        <div class="col-span-2 row-span-1 relative overflow-hidden rounded-lg shadow">
          <img :src="diagram" alt="Fundraiser" class="w-full h-full object-cover aspect-[4/3]">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded">Fundraiser Image</div>
        </div>

       <!-- Facebook Ad -->
        <div class="col-span-2 row-span-1 relative overflow-hidden rounded-lg shadow">
          <img :src="conference" alt="Facebook Ad" class="w-full h-full object-cover aspect-[4/3]">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded">Facebook Ad</div>
        </div>

        <!-- Carousel -->
        <div class="col-span-1 row-span-1 relative overflow-hidden rounded-lg shadow">
          <img :src="arizona_downtown" alt="Carousel" class="w-full h-full object-cover aspect-[4/5]">
          <div class="absolute bottom-2 left-2 bg-white/80 px-3 py-1 text-xs text-gray-700 rounded">Carousel Post</div>
        </div>

        
      </div>
    </div>
  </section>
    
    <section class="bg-white py-6 px-4 sm:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <!-- Title -->
        <div class="text-center mb-4">
          <h2 class="text-4xl font-bold text-gray-900 mb-2">The Merch</h2>
          <p class="text-lg text-gray-600">If you want some...  Get some...</p>
        </div>
  
        <!-- Image grid section -->
        <div class="space-y-24">
  
          <!-- Merch Details -->
          <div class="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <img src="../assets/images/bld_backpack.png" alt="Branded backpack" class="mx-auto rounded-lg shadow-md">
              <h4 class="text-lg font-medium mt-4 text-gray-800">The Backpack</h4>
              <p class="text-gray-600 text-sm">Durable, clean, and always ready. With full logo on front pocket.</p>
            </div>
            <div>
              <img src="../assets/images/bld_mug.png" alt="Branded mug" class="mx-auto rounded-lg shadow-md">
              <h4 class="text-lg font-medium mt-4 text-gray-800">The Mug</h4>
              <p class="text-gray-600 text-sm">Insulated travel tumbler with matte black finish and bold Blueline mark.</p>
            </div>
            <div>
              <img src="../assets/images/bld_Portfolio.png" alt="Branded Portfolio" class="mx-auto rounded-lg shadow-md">
              <h4 class="text-lg font-medium mt-4 text-gray-800">The Portfolio</h4>
              <p class="text-gray-600 text-sm">Insulated travel tumbler with matte black finish and bold Blueline mark.</p>
            </div>
            <div>
              <img src="../assets/images/bld_hat.png" alt="Branded hat" class="mx-auto rounded-lg shadow-md">
              <h4 class="text-lg font-medium mt-4 text-gray-800">The Hat</h4>
              <p class="text-gray-600 text-sm">Dark navy with a silver + blue embroidered logo. Casual cool.</p>
            </div>
            <div>
              <img src="../assets/images/bld_buckle.png" alt="Branded Buckle" class="mx-auto rounded-lg shadow-md">
              <h4 class="text-lg font-medium mt-4 text-gray-800">The Buckle</h4>
              <p class="text-gray-600 text-sm">Dark navy with a silver + blue embroidered logo. Casual cool.</p>
            </div>
            
            <div>
              <img src="../assets/images/bld_brand.png" alt="Branded Brand" class="mx-auto rounded-lg shadow-md">
              <h4 class="text-lg font-medium mt-4 text-gray-800">The Brand</h4>
              <p class="text-gray-600 text-sm">Insulated travel tumbler with matte black finish and bold Blueline mark.</p>
            </div>
          </div>
  
          <!-- Culture quote -->
          <div class="text-center py-12">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2">Worn with purpose. Backed by heart.</h3>
            <p class="text-gray-600 max-w-3xl mx-auto">Blueline gear isn’t just for show—it’s a symbol of our team-first culture. We design for people, for progress, and for pride in the work we do together.</p>
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

</script>