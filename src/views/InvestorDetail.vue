<template>
    <div class="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 class="text-4xl font-bold mb-4">{{ page?.title }}</h1>
      <img v-if="page?.image" :src="page.image" :alt="page.title" class="w-full h-64 object-cover rounded mb-6" />
      <p class="text-lg whitespace-pre-line">{{ page?.body }}</p>
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
      <div class="max-w-6xl mt-16">
        <InvestorCards />
      </div>  
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import AngelImg from '../assets/Angel_investment.jpg'
  import PartnershipImg from '../assets/strategic_Partnership.jpg'
  import SponsorshipImg from '../assets/Corporate_sponsorship.jpg'
  import DonationImg from '../assets/Donations.jpg'
  import GiftingImg from '../assets/Gifting.jpg'
  import PerksImg from '../assets/perks_works.jpg'
  import InvestorCards from '../components/InvestorCards.vue'
  
  const route = useRoute()
  
  const pages = [
    {
      slug: 'angel-investment',
      title: 'Angel Investment',
      image: AngelImg,
      body: `Angel investors are key to helping Bluehaven scale thoughtfully...
      
  You’ll receive early access, equity options, and a chance to shape the platform from the ground up.`,
    },
    {
      slug: 'strategic-partnership',
      title: 'Strategic Partnership',
      image: PartnershipImg,
      body: `Work with us to co-develop new features, test solutions, and share the impact...
  
  Strategic partners benefit from shared visibility, early pilots, and priority collaboration.`,
    },
    {
      slug: 'corporate-sponsorship',
      title: 'Corporate Sponsorship',
      image: SponsorshipImg,
      body: `Sponsorship puts your brand front and center while supporting better developer work...
  
  We offer naming opportunities, co-marketing, and visible platform presence.`,
    },
    {
      slug: 'philanthropic-donation',
      title: 'Philanthropic Donation',
      image: DonationImg,
      body: `If you're mission-driven, your donation helps fund inclusive dev access, learning, and community engagement.
  
  Bluehaven is building a better future for how devs work — help us get there.`,
    },
    {
      slug: 'gifting-recurring-support',
      title: 'Gifting & Recurring Support',
      image: GiftingImg,
      body: `Even small recurring contributions keep Bluehaven growing — just like healthy developer habits.
  
  You can give once or set up a monthly contribution. Every bit helps.`,
    },
    {
      slug: 'perks-for-works',
      title: 'Perks for Works',
      image: PerksImg,
      body: `Want to trade services? Let’s go.
  
  If you can offer space, tools, credits, or any helpful perks — we’ll return the favor with prototyping, UX help, or even full builds.`,
    },
  ]
  
  const page = pages.find((p) => p.slug === route.params.slug)
  </script>
  