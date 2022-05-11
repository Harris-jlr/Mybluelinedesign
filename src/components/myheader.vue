<template>
  <Popover class="relative bg-white">
    <div class="flex justify-between items-center px-4 pt-4  pb-0 sm:px-6 md:justify-start md:space-x-10">
      <div>
           <img class="w-48" src="/src/assets/trinityrail.png" alt="" >
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open menu</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
      </div>
      <div class="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <PopoverGroup as="nav" class="flex space-x-10">
          <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900"> Home </a>
            <a href="/documentation" class="text-base font-medium text-gray-500 active:font-bold hover:text-gray-900"> Descriptions </a>
          
         
          <!-- <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
              <span>Evaluations</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in resources" :key="item.name" :href="item.href" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                      <p class="text-base font-medium text-gray-900">
                        {{ item.name }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ item.description }}
                      </p>
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover> -->
          <a href="/samples4trinity.html" class="text-base font-medium text-gray-500 hover:text-gray-900"> Chart Samples </a>
        
          <!-- <a href="/samples" class="text-base font-medium text-gray-500 hover:text-gray-900"> Site Demo </a> -->
        </PopoverGroup>
        <div class="flex items-center md:ml-12">
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-6">
                <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                    <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div class="ml-4 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </div>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Enterprise </a>
              <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ item.name }}
              </a>
            </div>
            <div class="mt-6">
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid' 

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Journey Mapping',
    description: 'Learn more about your customer Journey for better customer engagement.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Design System',
    description: "Re-use your web components and create single source of truth for web standards.",
    href: '/mycodepen',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
  {
    name: 'Reports',
    description: 'Get detailed reports that will help you make more informed decisions ',
    href: '#',
    icon: DocumentReportIcon,
  },
]
const resources = [
  {
    name: 'Anychart',
    description: 'This one has massive out-of-the-box capabilities, combined with flexibility and simplicity.',
    href: 'https://www.anychart.com/blog/2022/04/08/great-new-charts-maps/',
  },
  { name: 'Charts.js', description: 'Chartsjs is animated, with a load of customisation options and interactivity extensions.', href: 'https://www.chartjs.org/' },
  { name: 'Amcharts.js', description: 'AmCharts is an advanced charting library that will suit any data visualization need.', href: 'https://www.amcharts.com/demos/' },
  { name: 'Highcharts', description: 'Highcharts is a software library for charting written in pure JavaScript, first released in 2009. It is free for personal/non-commercial uses.', href: 'https://www.highcharts.com/demo' },
  { name: 'FusionCharts', description: 'It is the most comprehensive JavaScript charting library, with over 100+ charts and 2000+ maps.', href: '#' },
  { name: 'D3.js', description: 'Extremely Flexible but incredibly complex and time-consuming.', href: '#' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      resources,
    }
  },
}
</script>

<style scoped>
.focus\:ring-2:focus {
    --tw-ring-shadow: none!important;
}
</style>