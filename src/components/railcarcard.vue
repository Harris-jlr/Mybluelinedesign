<template>
<div class="flex flex-row flex-wrap justify-center py-4 mx-5 w-full" >
<!-- This the beginning of the card --> 
   <div v-for="car in railcars" :key="car.location" class="flex flex-col text-center w-60 mx-5 mb-5 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div class="flex-1 flex flex-col p-8">
        <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" :src="car.destination" alt="" />
        <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ car.id }}</h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
          <dt class="sr-only">Type</dt>
          <dd class="text-gray-500 text-sm">{{ car.type }}</dd>
          <dt class="sr-only">Cargo</dt>
          <dd class="mt-3">
            <span class="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">{{ car.cargo }}</span>
          </dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
            <a :href="`mailto:${car.location}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
              <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">location</span>
            </a>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <a :href="`tel:${car.telephone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
              <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- this is the end of the card -->
  </div>
</template>

<script>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'

const railcars = [
  {
    id: 'Jane Cooper',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 'Faith Wells',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'faith.wells@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/2.jpg',
},
{
    id: 'Geke Al',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'geke.al@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/3.jpg',
},
{
    id: 'Nicoline Oldervik',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'nicoline.oldervik@example.com',
    telephone: '+1-202-555-0170',
    destination:
          'https://randomuser.me/api/portraits/women/4.jpg', 
},
{
    id: 'Jantsje Van Leijen',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'jantsje.vanleijen@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/6.jpg',
},
{
    id: 'Alfred George',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'alfred.george@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/7.jpg',
},
{
    id: 'Marcus Andersen',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'marcus.andersen@example.com',
    telephone: '+1-202-555-0170',
    destination:
          'https://randomuser.me/api/portraits/women/8.jpg', 
},
{
    id: 'Lawrence Dunn',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'lawrence.dunn@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/9.jpg',
},
{
    id: 'Carolina Rubio',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'carolina.rubio@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/11.jpg',
},
{
    id: 'Naomi Blanchard',
    type: 'Paradigm Representative',
    cargo: 'Admin',
    location: 'naomi.blanchard@example.com',
    telephone: '+1-202-555-0170',
    destination:
      'https://randomuser.me/api/portraits/women/12.jpg',
}]

export default {
  components: {
    MailIcon,
    PhoneIcon,
  },
  setup() {
    return {
      people,
    }
  },
}
</script>