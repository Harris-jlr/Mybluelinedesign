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
    name: 'AnyChart',
    description:
      'Flexible JavaScript (HTML5) based solution that allows you to create interactive charts that are cross-browser and cross-platform charting solution.  Ideal for everybody who needs dashboards, reporting, analytics, statistical, financial or any other data visualization solutions.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Charts.js',
    description:
      'Is a free JavaScript library for making HTML-based charts. It is one of the simplest visualization libraries for JavaScript, and comes with 9 standard chart types that can be customized.',
    icon: ScaleIcon,
  },
  {
    name: 'Highcharts',
    description:
      'Highcharts is a software library for charting written in pure JavaScript, first released in 2009. The license is proprietary. It is free for personal/non-commercial uses and paid for commercial applications.',
    icon: LightningBoltIcon,
  },
  {
    name: 'FusionCharts',
    description:
      'FusionCharts is the most comprehensive JavaScript charting library, with over 100+ charts and 2000+ maps. Integrated with all popular JavaScript frameworks and server-side programming languages and It is now Open Source under the GPL and MIT Licenses. ',
    icon: AnnotationIcon,
  },
  {
    name: 'AmCharts',
    description:
      'AmCharts is an advanced charting library that will suit any data visualization need. You will have to work around thier logo on the free version.  Their charting solution includes Column, Bar, Line, Area, Step, Step without risers, Smoothed line, Candlestick, OHLC, Pie/Donut, Radar/ Polar, XY/Scatter/Bubble, Bullet, Funnel/Pyramid charts and you an open them in code pen and grab the code directly for your project.',
    icon: GlobeAltIcon,
  },
  {
    name: 'D3.js',
    description:
      'This library has you declaring axes from scratch and creating the SVG before you can plot the actual chart.  It has a high learning curve and most of your time will be spent learning how to create the chart but once you do you will have a complete control one what it does and what it looks like.',
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