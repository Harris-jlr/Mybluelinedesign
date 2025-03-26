<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="pt-2 pb-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
      </div> -->

      <div class="mt-10">
        <!-- <h1 class="text-left text-3xl tracking-tight text-gray-900 font-bold pb-8">Library Descriptions</h1> -->
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/vue/outline'

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
    icon: ScaleIcon,
  },
  {
    name: 'Accessible UX/UI Design',
    description:
      'Design systems and interfaces crafted for usability, accessibility, and clean handoff to dev — beautiful and usable.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Data Visualization',
    description:
      'Custom dashboards and interactive charts using D3, Chart.js, or Tableau to make data understandable and actionable.',
    icon: AnnotationIcon,
  },
]


export default {
  setup() {
    return {
      features,
    }
  },
}
</script>