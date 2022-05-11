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
        <h1 class="text-left text-3xl tracking-tight text-gray-900 font-bold pb-8">Summary</h1>
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
    name: 'Optimize the Graphics',
    description:
      'Using smart charts that show more information with tooltips and drill down capabilities will create a more seemless application and ease of use.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Maximize Visualization',
    description:
      'Breaking information into seperate graphs, can give better insight and provide easy to understand information to your clients.',
    icon: ScaleIcon,
  },
  {
    name: 'Create Location and Railcar Cards',
    description:
      'The use of cards will allow more information in a smaller amount of space while still giving your clients the ability to sort and filter.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Data at your fingertips',
    description:
      'The more information you can pull out and represent graphically the easier it will be to monitor daily tasks and ease of readability.',
    icon: AnnotationIcon,
  },
  {
    name: 'Allow User Customized filter options',
    description:
      'Allowing customizable filters that are attached to logins will create a more custom approach and allow each client to show the information they need to do thier job.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Cross Filter Information',
    description:
      'By tying the maps and charts to the locations and rail cards you can create a more complete picture for your clients.',
    icon: ScaleIcon,
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