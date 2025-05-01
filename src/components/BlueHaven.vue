<template>
    <div class="bg-white text-gray-900">
     
  
      <!-- Hero Section -->
      <section class="bg-blue-900 py-10 text-center px-4 relative">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-10 mx-auto">
          <img src="../assets/logos/bhlogo_tran.png" alt="Bluehaven Logo" class="w-90% lg:max-w-1xl pr-12">
          <div class="text-left max-w-3xl">
            <h2 class="text-3xl lg:text-4xl font-extrabold text-[#2faadb] mb-4">Bluehaven Is Built For Developers, <br/>Backed By Vision</h2>
            <p class="text-lg text-blue-100 mb-8">
              This application dials the focus in on the developer's journey.  Creating a sustainable environment that moves away from chaos and towards harmony. This safehaven creates structured task flows, personal guidance, and shared momentum that speeds up development and creates better products.  Bluehaven keeps your developers engaged, overhead low and your projects thriving.
            </p>
            <div class="flex flex-wrap gap-4">
              <button class="bg-[#2faadb] text-white px-6 py-3 rounded-full hover:bg-[#138eed] transition">
                Schedule a Demo
              </button>
              <button class="bg-white border border-[#2faadb] text-[#2faadb] px-6 py-3 rounded-full hover:bg-blue-50 transition">
                Enlist your Team
              </button>
            </div>
          </div>
        </div>
        </section>

   <!-- Contributor CTA -->
      <section class="py-6 text-center px-4">
        <p class="text-center text-gray-700">
          <strong class="text-blue-500 text-xl">Want to contribute?</strong>
          <br />
          Submit a short form to join the developer collective and access meaningful project work.
          <br />
          <button @click="showContributorForm = true" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition">
            Offer to Contribute
          </button>
        </p>
      </section>

      <!-- Contributor Form Component -->
     <!-- Modal Overlay -->
<div v-if="showContributorForm" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
  <div class="bg-white rounded-xl shadow-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 relative">
    <!-- Close Button -->
    <button @click="showContributorForm = false" class="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl font-bold">
      &times;
    </button>

    <!-- Form -->
    <RequestForm @close="showContributorForm = false" />
  </div>
</div>



            
    </div>
  </template>

<script>
import RequestForm from '../components/RequestForm.vue'

export default {
  components: {
    RequestForm
  },
  data() {
    return {
      showContributorForm: false
    }
  },
  methods: {
    revealForm() {
      this.showContributorForm = true;
      this.$nextTick(() => {
        document.getElementById('contributor-form')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }
}
</script>
