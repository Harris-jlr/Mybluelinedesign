<template>
  <Popover class="relative bg-white">
    <div class="flex justify-between items-center px-4 pt-4  pb-0 sm:px-6 md:justify-start md:space-x-10">
      <div>
           <img class="w-24" src="../assets/light1sq.png" alt="" >
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
          <a href="/aboutbld" class="text-base font-medium text-gray-500 active:font-bold hover:text-gray-900"> About Us </a>
          <a href="/investors" class="text-base font-medium text-gray-500 active:font-bold hover:text-gray-900"> Investors </a>
          <a href="/OurServices" class="text-base font-medium text-gray-500 hover:text-gray-900"> Our Services </a>
          <a href="/StrategicPartner" class="text-base font-medium text-gray-500 hover:text-gray-900"> Strategic Partner </a>
        </PopoverGroup>
        <div class="flex items-center md:ml-12">
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </a>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20 bg-white">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900"><img class="h-24 w-auto" src="../assets/light1sq.png" alt="blueline" /></a>
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <!--mobile Menu-->
            <div class="mt-6 ">
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
            <div class="mt-6">
              <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-indigo-700"> Sign up </a>
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
    name: 'Home',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'About Us',
    description: 'Learn more about your customer Journey for better customer engagement.',
    href: '/aboutbld',
    icon: CursorClickIcon,
  },
  { name: 'Investors',
   href: '/Investors', 
   icon: ShieldCheckIcon },
  {
    name: 'Our Services',
    href: '/OurServices',
    icon: ViewGridIcon,
  },
  {
    name: 'Contact Us',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: 'mailto:contactus@bluelinedesign.org',
    icon: RefreshIcon,
  },
]
const resources = [
  {
    name: 'Front',
    description: 'This one has massive out-of-the-box capabilities, combined with flexibility and simplicity.',
    href: 'https://www.anychart.com/blog/2022/04/08/great-new-charts-maps/',
  },

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