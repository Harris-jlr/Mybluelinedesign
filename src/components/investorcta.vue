<template>
    <div class="bg-white text-gray-800">
      <!-- Hero Section -->
      <section class="w-full py-8 px-4 md:px-12 lg:px-24 bg-gradient-to-r from-blue-100 to-blue-200">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Be Part of Something Bigger.</h1>
        <p class="text-lg md:text-xl max-w-3xl">
          Invest in the future of developer work—one that’s fair, flexible, and built to last.
        </p>
      </section>
  
      <!-- Why Invest Section -->
      <section class="py-8 px-4 md:px-12 lg:px-24">
        <h2 class="text-3xl font-semibold mb-6">Why Invest in us?</h2>
        <p class="max-w-6xl mb-4">
          We are not a temp agency or contract for hire and we aren't looking for our pie in the sky!  Our focus here at Blueline Design is to create a new environment for developers.  One that keeps their journey at the forefront and gives them a safe space to work.  Developers are being burned out, benched, or dropped from meaningful work due to outdated engagement models.
          Blueline Design is partnering with Bluehaven to reimagine how developers can thrive and grow through structured project sharing, sustainable compensation, and amazing team building.
        </p>
        <p class="max-w-4xl">
          By investing now, you’re not just funding a product—you’re backing a movement for better, healthier tech work.
        </p>
      </section>
  
      <section class="px-10 py-10">
        <Stepper />
      </section>
      <!-- Engagement Options Placeholder -->
      <section class="text-gray-50 py-8 px-4 md:px-12 lg:px-24 bg-gray-900">
        <h2 class="text-3xl font-semibold mb-8">Ways to Support</h2>
        <p class="text-lg max-w-6xl mb-8">
          Whether you’re an angel investor, philanthropist, or advocate for tech reform, there’s a place for you in our journey.
        </p>
        <!-- Placeholder for cards -->
        <div class="text-gray-800">
     
         <BetterCards />
        </div>
      </section>
  
      <!-- Contact CTA -->
      <section class="py-16 px-4 md:px-12 lg:px-24 text-center">
        <h2 class="text-3xl font-semibold mb-4">Let’s Talk</h2>
        <p class="mb-6 text-lg">Ready to connect about investment or partnership? Reach out and let’s start a conversation.</p>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full transition">
            <a
            href="mailto:contactus@bluelinedesign.org"
            class="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full transition"
            >
            Contact Us
            </a>

        </button>
      </section>
    </div>
  </template>
  
  <script>
import Stepper from '../contents/stepper.vue';
import BetterCards from './BetterCards.vue';

export default {
  components: { BetterCards, Stepper },
}
  // Placeholder for future enhancements like modal, routing, or form logic
  </script>
  