<template>
    <div class="flex">
      <!-- Stepper nav (left) -->
      <div class="border-l border-gray-200 pl-4 w-1/4 min-w-[200px]">
        <div class="flex flex-col space-y-4">
          <div
            v-for="(step, index) in steps"
            :key="index"
            @click="$emit('stepChange', index)"
            class="cursor-pointer text-sm font-medium relative pl-4 flex items-center gap-2"
            :class="index === activeStep ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50 rounded-r-md py-2 pr-2' : 'text-gray-600 hover:text-gray-800 py-2 pr-2'"
          >
            <span class="text-base">🔹</span>
            <span>{{ index + 1 }}. {{ step.title }}</span>
          </div>
        </div>
      </div>
  
      <!-- Slot for results window or main content (right) -->
      <div class="w-3/4 pl-8">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      steps: {
        type: Array,
        required: true
      },
      activeStep: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  </style>