<template>
    <div class="p-4 border rounded-lg shadow-md">
      <h3 class="text-lg font-bold">{{ skill.name }}</h3>
      <p class="text-sm text-gray-600">{{ skill.years }}+ years</p>
      <ul class="list-disc pl-4 mt-2">
        <li v-for="detail in skill.details" :key="detail">{{ detail }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      skill: Object
    }
  };
  </script>
  
  <style scoped>
  .p-4 {
    background-color: white;
  }
  </style>
  