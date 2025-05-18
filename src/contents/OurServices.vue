<!-- This is the OurServices.vue component -->
<template>
     <!-- Hero Section -->
      <section class="w-full py-8 px-4 md:px-12 lg:px-24 bg-gradient-to-r from-blue-100 to-blue-200">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Be Part of Something Bigger.</h1>
        <p class="text-lg md:text-xl max-w-5xl">
          Invest in the future of developement - We are building an environment that’s flexible, and built to last.
        </p>
      </section>
      
    <div class="pt-2 pb-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        

        <div class="mt-10">
          <h2 class="text-3xl text-center font-bold pb-12">Our Services</h2>
          <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div v-for="feature in features" :key="feature.name" class="relative" >
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white" >
                  <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ feature.name }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ feature.description }}
              </dd>
            </div>
          </dl>
        </div>
    </div>
         <!-- Why Invest Section 
      <section class="py-28 px-4 md:px-12 lg:px-24">
        <h2 class="text-3xl font-semibold mb-6">Why Invest in us?</h2>
        <p class="max-w-6xl mb-4">
          We are not a temp agency or contract for hire and we aren't looking for our pie in the sky!  Our focus here at Blueline Design is to create a new environment for developers.  One that keeps their journey at the forefront and gives them a safe space to work.  Developers are being burned out, benched, or dropped from meaningful work due to outdated engagement models.
          Blueline Design is partnering with Bluehaven to reimagine how developers can thrive and grow through structured project sharing, sustainable compensation, and amazing team building.
        </p>
        <p class="max-w-4xl">
          By investing now, you’re not just funding a product—you’re backing a movement for better, healthier tech work.
        </p>
      </section>-->

      
    </div>
  </template>
  
  <script>
  import {
    GlobeAltIcon,
    AnnotationIcon,
    LightningBoltIcon,
    CodeIcon,
    ScaleIcon,
    ChartBarIcon,
  } from '@heroicons/vue/outline'
  
  
  const features = [
    {
      name: 'Consultation & Strategy',
      description:
        'Expert guidance on tech stack selection, architecture planning, and project feasibility to ensure smart, scalable starts.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Discovery Workshops',
      description:
        'We facilitate collaborative sessions to define goals, surface risks, align teams, and create actionable project roadmaps.',
      icon: AnnotationIcon,
    },
    {
      name: 'Rapid Prototyping',
      description:
        'Low-fidelity or functional prototypes built quickly to validate ideas, gather feedback, and accelerate product vision.',
      icon: LightningBoltIcon,
    },
    {
      name: 'Front-End Architecture',
      description:
        'Modern, scalable UI foundations using frameworks like Vue, Vite, and Tailwind for fast, maintainable code.',
      icon: CodeIcon,
    },
    {
      name: 'Accessible UX/UI Design',
      description:
        'Design systems and interfaces crafted for usability, accessibility, and clean handoff to dev — beautiful and usable.',
      icon: ScaleIcon,
    },
    {
      name: 'Data Visualization',
      description:
        'Custom dashboards and interactive charts using D3, Chart.js, or Tableau to make data understandable and actionable.',
      icon: ChartBarIcon,
    },
  ]
  
  export default {
  setup() {
    return {
      features
    }
  }
}
  </script>
  