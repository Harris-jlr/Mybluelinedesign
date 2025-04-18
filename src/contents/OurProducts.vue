<template>
    <div class="relative w-full bg-blue-900 text-white py-12 px-6 overflow-hidden">
      <!-- Blueprint Grid Background -->
      <div class="absolute inset-0 bg-[url('/images/blueprint-grid.svg')] bg-cover opacity-10 pointer-events-none z-0"></div>
  
      <div class="relative max-w-7xl mx-auto text-center z-10">
        <h1 class="text-5xl font-bold tracking-tight mb-6">Introducing Bluehaven</h1>
        <p class="text-xl text-blue-100 max-w-7xl mx-auto mb-12">
          Bluehaven is a flagship product from Blueline Design—built to transform how developers, designers, and technical teams find and engage in meaningful work. It’s more than a task board. It’s a structured ecosystem for growth, task matching, and verified outcomes.
        </p>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto text-center mb-4">
          <div class="bg-white text-blue-900 border rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <img src="../assets/images/task-curation.png" alt="Task Curation" class="mb-4" />
            <h3 class="text-xl font-semibold mb-2">Daily Task Curation</h3>
            <p class="text-gray-700">This is where the work lives so there is always something to do. When there is enough food on the table, there is room for everyone to eat.</p>
          </div>
          <div class="bg-white text-blue-900 border rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <img src="../assets/images/virtual-assistant.png" alt="Virtual Assistant" class="mb-4" />
            <h3 class="text-xl font-semibold mb-2">Virtual Assistant Guidance</h3>
            <p class="text-gray-700">Contributors are supported by a personal virtual assistant that will know their skills, keep track of their growth, and surfaces the right work at the right time.</p>
          </div>
          <div class="bg-white text-blue-900 border rounded-2xl p-6 shadow-lg flex flex-col items-center">
            <img src="../assets/images/collective-momentum.png" alt="Collective Momentum" class="mb-4" />
            <h3 class="text-xl font-semibold mb-2">Collective Momentum</h3>
            <p class="text-gray-700">Bluehaven allows companies to post tasks that benefit their teams or the broader community. Work can be internal, open, or experience-based—and all of it adds to your verified track record.</p>
          </div>
        </div>
      </div>
    </div>
  </template>