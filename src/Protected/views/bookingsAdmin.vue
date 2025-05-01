<template>
    <section class="bg-gray-100 py-6 px-4 sm:px-8 lg:px-16">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-gray-900 mb-8 text-center">Booking Requests</h2>
  
        <div class="mb-8 flex flex-wrap justify-center gap-4">
        <select v-model="selectedClient" class="border rounded-xl pl-3 pr-10 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white bg-[url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M19 9l-7 7-7-7\'/></svg>')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.5em_1.5em]">
            <option value="">All Clients</option>
            <option v-for="client in clients" :key="client" :value="client">{{ client }}</option>
        </select>

        <select v-model="selectedBusiness" class="border rounded-xl pl-3 pr-10 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white bg-[url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M19 9l-7 7-7-7\'/></svg>')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.5em_1.5em]">
            <option value="">All Businesses</option>
            <option v-for="business in businesses" :key="business" :value="business">{{ business }}</option>
        </select>

        <select v-model="selectedDate" class="border rounded-xl pl-3 pr-10 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white bg-[url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M19 9l-7 7-7-7\'/></svg>')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.5em_1.5em]">
            <option value="">All Dates</option>
            <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
        </select>

        <select v-model="selectedPlan" class="border rounded-xl pl-3 pr-10 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white bg-[url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M19 9l-7 7-7-7\'/></svg>')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.5em_1.5em]">
            <option value="">All Plans</option>
            <option v-for="plan in plans" :key="plan" :value="plan">{{ plan }}</option>
        </select>

        <select v-model="selectedType" class="border rounded-xl pl-3 pr-10 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white bg-[url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%236B7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M19 9l-7 7-7-7\'/></svg>')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.5em_1.5em]">
          <option value="">All Types</option>
          <option value="booking">Booking Requests</option>
          <option value="contributor">Contributor Offers</option>
        </select>

        <button
            v-if="selectedClient || selectedBusiness || selectedDate || selectedPlan"
            @click="clearFilters"
            class="px-6 py-3 bg-gray-300 text-gray-700 rounded-xl hover:bg-gray-400 transition shadow-sm"
        >
            Clear Filters
        </button>
        </div>


        


  
        <div v-if="filteredBookings.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(booking, index) in filteredBookings"
            :key="index"
            class="relative bg-white rounded-lg shadow-md transition-transform duration-500 cursor-pointer group [transform-style:preserve-3d] min-h-[220px]"
            @click="flipCard(index)"
            :class="{'rotate-y-180': flippedCards.includes(index)}"
          >
            <!-- FRONT SIDE -->
            <div class="absolute bg-gray-300 inset-0 rounded-lg backface-hidden flex flex-col">
              
  
              <div class="p-4 flex-1 flex flex-col bg-white ">
                <h3 class="text-xl font-semibold text-gray-800">{{ booking.name }}</h3>
                <p class="text-gray-600 mb-4">{{ booking.business }}</p>
  
                <div class="space-y-2">
                    <p class="flex items-center text-sm text-gray-500 truncate">
                    <MailIcon class="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                    <a :href="'mailto:' + booking.email" class="text-blue-600 hover:underline">{{ booking.email }}</a>
                    </p>

                    <p class="flex items-center text-sm text-gray-500 truncate">
                    <PhoneIcon class="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                    <a :href="'tel:' + booking.phone" class="text-blue-600 hover:underline">{{ booking.phone }}</a>
                    </p>

                    <p v-if="booking.webaddress" class="flex items-center text-sm text-gray-500 truncate">
                    <GlobeAltIcon class="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                    <a :href="booking.webaddress" target="_blank" class="text-blue-600 hover:underline">{{ booking.webaddress }}</a>
                    </p>

                </div>
              </div>
  
              <div :class="['text-center text-white text-xs font-semibold py-3 rounded-b-lg', planBadgeColor(booking.plan)]">
                {{ booking.plan }}
              </div>
            </div>
  
            <!-- BACK SIDE -->
            <div class="absolute inset-0 bg-gray-200 rounded-lg backface-hidden rotate-y-180 p-6 flex flex-col overflow-hidden">
              <div class="flex-1 overflow-y-auto">
                <h3 :class="['text-xl font-bold', planCompanyColor(booking.plan)]">{{ booking.business }}</h3>
                <p class="text-xs text-gray-600 mb-4">Submitted: {{ formatDate(booking.submittedAt) }}</p>
                <div v-if="booking.description" class="text-gray-700 text-sm mb-4">
                  <strong>Description:</strong>
                  <p class="mt-1">{{ booking.description }}</p>
                </div>
                <div v-if="booking.message" class="text-gray-700 text-sm">
                  <strong>Notes:</strong>
                  <p class="mt-1">{{ booking.message }}</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
        <div v-else class="text-center text-gray-500 mt-20">
          No bookings match your search.
        </div>
      </div>
    </section>
  </template>
  
  <script>
 import { MailIcon, PhoneIcon, GlobeAltIcon } from '@heroicons/vue/outline';

  export default {
    name: 'BookingsAdmin',
    data() {
    return {
        bookings: [],
        flippedCards: [],
        selectedClient: '',
        selectedBusiness: '',
        selectedDate: '',
        selectedPlan: '',
        selectedType: ''
    };
    },
    components: {
    MailIcon,
    PhoneIcon,
    GlobeAltIcon
    },
    computed: {
    clients() {
        return [...new Set(this.bookings.map(b => b.name))];
    },
    businesses() {
        return [...new Set(this.bookings.map(b => b.business))];
    },
    dates() {
        return [...new Set(this.bookings.map(b => this.formatDate(b.submittedAt)))];
    },
    plans() {
        return [...new Set(this.bookings.map(b => b.plan))];
    },
    filteredBookings() {
        return this.bookings.filter(booking => {
        const matchClient = this.selectedClient ? booking.name === this.selectedClient : true;
        const matchBusiness = this.selectedBusiness ? booking.business === this.selectedBusiness : true;
        const matchDate = this.selectedDate ? this.formatDate(booking.submittedAt) === this.selectedDate : true;
        const matchPlan = this.selectedPlan ? booking.plan === this.selectedPlan : true;
        return matchClient && matchBusiness && matchDate && matchPlan;
        });
    }
    },

    mounted() {
      if (localStorage.getItem('isAuthenticated') !== 'true') {
        this.$router.push('/login');
        return;
      }
      fetch('http://localhost:3000/api/bookings')
        .then(response => response.json())
        .then(data => {
          this.bookings = data.filter(item => item.type === 'booking' || item.type === 'contributor');
    })
        .catch(error => {
          console.error('Error loading bookings:', error);
        });
    },
    methods: {
        clearFilters() {
        this.selectedClient = '';
        this.selectedBusiness = '';
        this.selectedDate = '';
        this.selectedPlan = '';
        this.selectedType = '';
        },
    formatDate(date) {
        return new Date(date).toLocaleString();
      },
      planBadgeColor(plan) {
        switch (plan.toLowerCase()) {
          case 'quick start': return 'bg-green-500';
          case 'discovery': return 'bg-yellow-500';
          case 'foundation': return 'bg-blue-600';
          case 'growth': return 'bg-purple-600';
          default: return 'bg-gray-400';
        }
      },
      planCompanyColor(plan) {
        switch (plan.toLowerCase()) {
          case 'quick start': return 'text-green-500';
          case 'discovery': return 'text-yellow-500';
          case 'foundation': return 'text-blue-600';
          case 'growth': return 'text-purple-600';
          default: return 'text-gray-400';
        }
      },
      getWebsiteScreenshot(url) {
        try {
          const encodedUrl = encodeURIComponent(url);
          return `https://api.microlink.io/?url=${encodedUrl}&screenshot=true&meta=false&embed=screenshot.url`;
        } catch {
          return '/fallback-image.png';
        }
      },
      handleImageError(event) {
        event.target.src = '/fallback-image.png';
      },
      flipCard(index) {
        if (this.flippedCards.includes(index)) {
          this.flippedCards = this.flippedCards.filter(i => i !== index);
        } else {
          this.flippedCards.push(index);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .group:hover .rotate-y-180 {
    transform: rotateY(180deg);
  }
  </style>