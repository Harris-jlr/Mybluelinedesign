<template>
    <div class="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4">
      <div class="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-8 relative">
        <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          &times;
        </button>
  
        <h2 class="text-2xl font-bold mb-6 text-center">Request to Contribute</h2>
  
        <div v-if="showNDA">
          <iframe
            src="https://na2.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhB6gElKLtD_hr3jXmJKyUYDqlNeOkcktX01_q_kgIF5hZeAwlfEz1LpFsAcGUVjR5o*&hosted=false"
            width="100%"
            height="600px"
            frameborder="0"
            style="border: 0; overflow: hidden;"
          ></iframe>
          <div class="mt-4 text-center">
            <button
              @click="showNDA = false"
              class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Back to Form
            </button>
          </div>
        </div>
  
        <form v-else @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block font-medium">Full Name</label>
              <input v-model="form.name" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md text-base mt-1" required />
            </div>
            <div>
              <label class="block font-medium">Email</label>
              <input v-model="form.email" type="email" class="w-full px-4 py-2 border border-gray-300 rounded-md text-base mt-1" required />
            </div>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label class="block font-medium">LinkedIn or GitHub (optional)</label>
              <input v-model="form.link" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md text-base mt-1" />
            </div>
            <div>
              <label class="block font-medium">When can you start?</label>
              <input v-model="form.startDate" type="date" class="w-full px-4 py-2 border border-gray-300 rounded-md text-base mt-1" />
            </div>
            <div>
              <label class="block font-medium">Est. Availability</label>
              <input v-model="form.availability" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-md text-base mt-1" />
            </div>
          </div>
  
          <div class="mt-4">
            <label class="block font-medium">Area of Interest</label>
            <select v-model="form.interest" class="w-full px-4 py-2 border border-gray-300 rounded-md text-base mt-1">
              <option value="UX/UI Design">UX/UI Design</option>
              <option value="Front-End Dev">Front-End Dev</option>
              <option value="Back-End Dev">Back-End Dev</option>
              <option value="DevOps">DevOps</option>
              <option value="Product">Product</option>
            </select>
          </div>
  
          <div class="mt-4">
            <label class="block font-medium">What do you want to help with?</label>
            <textarea v-model="form.message" class="w-full px-4 py-2 border border-gray-300 rounded-md text-base mt-1" rows="4"></textarea>
          </div>
  
          <!-- NDA and Submit CTAs side by side, right-aligned -->
          <div class="mt-6 flex justify-start gap-4 items-center">
            <p class="text-sm text-gray-700">* Sign NDA to expedite this process.</p>
          </div>
          <div class="mt-6 flex justify-end gap-4 items-center">  
            <button
              type="button"
              @click="showNDA = true"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Sign Contributor NDA
            </button>
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'RequestForm',
  data() {
    return {
      showNDA: false,
      ndaSigned: false,
      form: {
        name: '',
        email: '',
        link: '',
        interest: '',
        message: '',
        startDate: '',
        availability: '',
        confirmedNDA: false
      }
    };
  },
  methods: {
    async submitForm() {
      const payload = {
        name: this.form.name,
        email: this.form.email,
        linkedin: this.form.link,
        availability: this.form.availability,
        interests: [this.form.interest],
        skills: this.form.message ? this.form.message.split(',').map(s => s.trim()) : []
      };

      try {
        const res = await fetch('/.netlify/functions/save-contributor-request', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const result = await res.json();
        console.log('Response from Notion function:', result);

        // Optional: show a success message here before closing
        this.$emit('close');
      } catch (error) {
        console.error('Error submitting to Notion:', error);
      }
    }
  }
};
</script>

  