<template>
<section class="absolute z-20 -mt-12 px-6  pb-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="relative bg-gradient-to-r from-indigo-700 to-purple-600 text-white p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out will-change-transform overflow-hidden">
        <div class="absolute -top-8 -right-8 h-24 w-24 bg-white/10 rounded-full flex items-center justify-center ">
          <component :is="icons.layout" class="h-5 w-5 text-white" />
        </div>
        <h3 class="text-base font-semibold mb-1">Custom Software Development</h3>
        <p class="text-sm text-white/90">Tailored applications designed for your unique business goals and workflows.</p>
      </div>
    </div>
</section>

</template>
