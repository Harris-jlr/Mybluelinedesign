<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SkillCard v-for="skill in skills" :key="skill.name" :skill="skill" />
    </div>
  </template>
  
  <script>
  import SkillCard from "./SkillCard.vue";
  
  export default {
    components: { SkillCard },
    props: {
      skills: Array
    }
  };
  </script>
  
  <style scoped>
  .grid {
    max-width: 900px;
    margin: 0 auto;
  }
  </style>
  