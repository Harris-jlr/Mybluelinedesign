<template>
    <div class="flex justify-center my-6 space-x-4">
      <input 
        v-model="searchTerm" 
        @input="$emit('update:search', searchTerm)" 
        type="text" 
        placeholder="Search skills..." 
        class="border p-2 rounded w-1/3"
      />
      <select 
        v-model="sortOption" 
        @change="$emit('update:sortKey', sortOption)" 
        class="border p-2 rounded"
      >
        <option value="">Sort by...</option>
        <option value="years">Years of Experience</option>
        <option value="name">Skill Name</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      search: String,
      sortKey: String
    },
    data() {
      return {
        searchTerm: this.search,
        sortOption: this.sortKey
      };
    }
  };
  </script>
  
  <style scoped>
  .w-33 {
    width: 33%;
  }
  </style>
  