<!-- This is the OurServices.vue component -->
<template>
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
    </div>
    <Stepper />
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
  import Stepper from './stepper.vue';
  
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
  components: {
    Stepper
  },
  setup() {
    return {
      features
    }
  }
}
  </script>
  