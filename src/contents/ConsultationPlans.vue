<template>
  <section class="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
    <div class="max-w-5xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-900 mb-4">Choose Your Consultation Plan</h2>
      <p class="text-lg text-gray-600">Start with confidence — no long-term contracts, real progress from day one.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
      <!-- Plan Cards -->
      <div v-for="(plan, index) in plans" :key="index" class="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105 border-2" :class="plan.highlight ? 'border-blue-500 bg-blue-100' : 'border-white'">
        <div class="flex flex-col items-center">
          <h3 class="text-2xl font-semibold mb-2" :class="plan.highlight ? 'text-blue-700' : 'text-gray-900'">{{ plan.name }}</h3>
          <p class="text-5xl font-bold mb-2" :class="plan.highlight ? 'text-blue-700' : 'text-gray-900'">{{ plan.price }}<span v-if="plan.weekly" class="text-base font-normal">/wk</span></p>
          <p class="text-gray-500 mb-8"></p>
          <ul class="text-gray-700 space-y-2 text-left mb-6">
            <li v-for="(feature, idx) in plan.features" :key="idx">✔️ {{ feature }}</li>
          </ul>
        </div>
        <button @click="openForm(plan.name)" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded mt-auto">{{ plan.cta }}</button>
      </div>
    </div>

    <!-- Booking Form Modal -->
    <div v-if="showForm" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-8 w-full max-w-lg relative">
        <button @click="closeForm" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✕</button>
        <h3 class="text-2xl font-bold mb-6 text-center">Book Your {{ selectedPlan }} Session</h3>
        <form @submit.prevent="submitForm" class="space-y-4">
          <input v-model="form.name" type="text" placeholder="Name of Contact" class="w-full border rounded p-2" required>
          <input v-model="form.business" type="text" placeholder="Name of Business" class="w-full border rounded p-2" required>
          <input v-model="form.webaddress" type="text" placeholder="Company Website (optional)" class="w-full border rounded p-2">
          <input v-model="form.email" type="email" placeholder="Your Email" class="w-full border rounded p-2" required>
          <input v-model="form.phone" type="text" placeholder="Your Phone Number" class="w-full border rounded p-2" required>
          <select v-model="form.timePreference" class="w-full border rounded p-2" required>
            <option disabled value="">Preferred Contact Time</option>
            <option>Morning</option>
            <option>Evening</option>
          </select>
          <select v-model="form.contactPreference" class="w-full border rounded p-2" required>
            <option disabled value="">Preferred Contact Method</option>
            <option>Email</option>
            <option>Text</option>
          </select>
          <textarea v-model="form.message" placeholder="Tell us a little about your needs" class="w-full border rounded p-2"></textarea>
          <button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded w-full">Submit Booking</button>
        </form>
      </div>
    </div>

    <!-- Success Message -->
    <div v-if="showSuccess" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-8 w-full max-w-md text-center">
        <h3 class="text-2xl font-bold text-green-600 mb-4">Booking Received!</h3>
        <p class="text-gray-700 mb-6">Thank you {{ form.name }} — your request for {{ selectedPlan }} has been recorded. We'll contact you soon!</p>
        <button @click="closeSuccess" class="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded">Close</button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ConsultationPlans',
  data() {
    return {
      showForm: false,
      showSuccess: false,
      selectedPlan: '',
      bookings: [],
      form: {
        name: '',
        business: '',
        webaddress: '',
        email: '',
        phone: '',
        timePreference: '',
        contactPreference: '',
        message: ''
      },
      plans: [
        {
          name: 'Quick Start',
          price: '$0',
          features: [
            '20 minute session',
            'One focus area per call',
            'Business review',
            'Actionable tips each week',
            'Up to 3 sessions'
          ],
          cta: "Let's Start",
          highlight: false,
          weekly: false
        },
        {
          name: 'Discovery',
          price: '$180',
          features: [
            '2 hours per week',
            'Full Strategy Session',
            'Review of goals',
            'Quick Wins Roadmap',
            'Recommendations'
          ],
          cta: "Let's Plan",
          highlight: false,
          weekly: true
        },
        {
          name: 'Foundation',
          price: '$360',
          features: [
            '4 hours per week',
            'Business Mapping',
            'Mini Brand or Website Audit',
            '90-Day Action Plan',
            'Priority Email Support'
          ],
          cta: "Let's Build",
          highlight: true,
          weekly: true
        },
        {
          name: 'Growth',
          price: '$720',
          features: [
            '8 hours per week',
            'Full Strategic Discovery',
            'Branding assets',
            'Growth roadmap',
            'Hands-on Launch Support'
          ],
          cta: "Let's Grow",
          highlight: false,
          weekly: true
        }
      ]
    }
  },
  methods: {
    openForm(planName) {
      this.selectedPlan = planName;
      this.showForm = true;
    },
    closeForm() {
      this.showForm = false;
      this.form = { name: '', business: '', webaddress: '', email: '', phone: '', timePreference: '', contactPreference: '', message: '' };
    },
    submitForm() {
    fetch('http://localhost:3000/api/save-booking', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...this.form,
      plan: this.selectedPlan,
      submittedAt: new Date().toISOString()
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      this.showForm = false;
      this.showSuccess = true;
    } else {
      alert('There was an error saving your booking.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error submitting booking.');
  });
  },
    closeSuccess() {
      this.showSuccess = false;
      this.form = { name: '', business: '', webaddress: '', email: '', phone: '', timePreference: '', contactPreference: '', message: '' };
    }
  }
}
</script>
