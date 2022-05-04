<template>
<h3 class="mx-16 px-4 font-bold" >More Railcar Details - Click on the specific areas of the charts above to see car details. </h3>
<div class="flex flex-row flex-wrap justify-center py-2 mx-5 w-full" >
  
<!-- This the beginning of the card --> 
   <div v-for="person in people" :key="person.email" class="flex flex-col w-60 mx-5 mb-5 bg-gray-100 rounded-lg shadow divide-y divide-gray-200">
      <div class="flex-1 flex flex-col p-4">
        <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ person.name }}</h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dt class="sr-only">Title</dt>
          <dd class="text-gray-500 text-sm">{{ person.title }}</dd>
          <dt class="sr-only">Role</dt>
          <dd class="mt-3">
            <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ person.role }}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a :href="`mailto:${person.email}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a :href="`tel:${person.telephone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <BellIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">ALERTS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- this is the end of the card -->
  </div>
</template>

<script>
import { MailIcon, BellIcon } from '@heroicons/vue/solid'

const people = [
  {
    name: 'Car: 2349583-32',
    title: 'Company',
    role: 'Empty',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Car: 2349583-32',
    title: 'NEW YORK to TEXAS',
    role: 'Wheat',
    email: 'faith.wells@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/2.jpg',
},
{
    name: 'Car: 2349583-32',
    title: 'FLORIDA to OHIO',
    role: 'OIL',
    email: 'geke.al@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/3.jpg',
},
{
    name: 'Car: 2349583-32',
    title: 'FLORIDA to TEXAS',
    role: 'Empty',
    email: 'nicoline.oldervik@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
          'https://randomuser.me/api/portraits/women/4.jpg', 
},
{
    name: 'Car: 2349583-32',
    title: 'NEW YORK to FLORIDA',
    role: 'Coal',
    email: 'jantsje.vanleijen@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/6.jpg',
},
{
    name: 'Car: 2349583-32',
    title: 'NEW YORK to NEW YORK',
    role: 'Produce',
    email: 'alfred.george@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/7.jpg',
},
{
    name: 'Car: 2349583-32',
    title: 'TEXAS to OHIO',
    role: 'Empty',
    email: 'marcus.andersen@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
          'https://randomuser.me/api/portraits/women/8.jpg', 
},
{
    name: 'Car: 2349583-32',
    title: 'CA to FL',
    role: 'OIL',
    email: 'lawrence.dunn@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://randomuser.me/api/portraits/women/9.jpg',
}
]

export default {
  components: {
    MailIcon,
    BellIcon,
  },
  setup() {
    return {
      people,
    }
  },
}
</script>