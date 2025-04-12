<template>
    <div class="w-full bg-white py-16 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Bluehaven</h1>
        <p class="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Bluehaven is a developer-first task engagement platform designed to replace outdated bench time with real opportunities for growth, income, and connection. Whether you're a developer, designer, product owner, or DevOps pro, you can log in daily to find structured, meaningful work laid out just for you. Your virtual assistant helps onboard, recommend, and track your progress so you can focus on what you do best.
        </p>
  
        <!-- Contributor Tiers -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Contributor Access</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div
            v-for="tier in contributorTiers"
            :key="tier.title"
            class="border rounded-2xl p-6 shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 class="text-xl font-bold mb-2">{{ tier.title }}</h3>
              <p class="text-gray-600 mb-4">{{ tier.description }}</p>
            </div>
            <button class="mt-auto bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-xl">
              {{ tier.button }}
            </button>
          </div>
        </div>
  
        <!-- Client Tiers -->
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Client Subscriptions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <div class="border rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold mb-2">Company Subscription</h3>
              <p class="text-gray-600 mb-2">
                Internal work available to all employees (email domain match).
              </p>
              <p class="text-gray-600 mb-2">
                <strong>WBS required</strong> for all internal tasks to ensure paid work.
              </p>
              <p class="text-gray-600">
                Tasks shared with the Bluehaven Collective are billed weekly per completed card.
              </p>
            </div>
            <button class="mt-6 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-xl">
              Contact Sales
            </button>
          </div>
  
          <div class="border rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-bold mb-2">Individual Product Owner</h3>
              <p class="text-gray-600">
                Post no-charge Freework tasks for contributors seeking experience and feedback.
              </p>
            </div>
            <button class="mt-6 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-xl">
              Start Posting
            </button>
          </div>
        </div>
  
        <!-- CTA Section -->
        <div class="bg-blue-50 rounded-2xl p-10 text-center mt-16">
          <h2 class="text-2xl font-bold text-blue-900 mb-4">Still unsure which plan is right for you?</h2>
          <p class="text-gray-700 mb-6">
            Reach out to us — we’ll help you find the best fit based on your goals.
          </p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-xl">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const contributorTiers = [
    {
      title: 'Free',
      description: 'One task at a time. Great for getting started.',
      button: 'Get Started'
    },
    {
      title: 'SME Tier',
      description: 'Access to RFPs and specialized work. Verified status required.',
      button: 'Request Verification'
    },
    {
      title: 'Paid General',
      description: 'One task at a time with early access to queues.',
      button: 'Subscribe Now'
    },
    {
      title: 'Paid Cleanup',
      description: 'Buffet-style task access. Fill your daily plate!',
      button: 'Subscribe Now'
    }
  ]
  </script>
  
  <style scoped>
  /* Scoped styles if needed */
  </style>
  