<template>
    <div class="bg-gray-900 flex flex-col items-center justify-center">
      <!-- Filter & Sort Controls -->
      <div class="max-w-6xl bg-gray-900 rounded-xl shadow-md overflow-hidden ">
        <div class="flex flex-row justify-end my-6">
        <input v-model="search" type="text" placeholder="Search skills..." class="border p-2 rounded">
        <select v-model="sortKey" class="border p-2 rounded ml-4">
          <option value="">Sort by...</option>
          <option value="years">Years of Experience</option>
          <option value="name">Skill Name</option>
        </select>
      </div>
      
      <!-- Skills List -->
      <div class="max-w-8xl bg-gray-900 rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      <section class="my-12">
        <h2 class="text-2xl text-white font-normal text-center mb-4">You can search and filter through the following skills cards</h2>
        <div class="grid grid-cols-1 text-gray-800 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SkillCard v-for="skill in sortedSkills" :key="skill.name" :skill="skill" />
        </div>
      </section>
    </div>
    </div>
    </div>
  </template>
  
  <script>
  import SkillCard from "./SkillCard.vue";
  
  export default {
    components: { SkillCard },
    data() {
      return {
        search: "",
        sortKey: "",
        skills: [
          { name: "Frontend Development & UX/UI", years: 30, details: ["Vue3", "React", "JavaScript", "TypeScript", "CSS Frameworks", "Responsive Web Design", "SPAs"] },
          { name: "Design & Prototyping", years: 20, details: ["Adobe Suite", "Figma", "Sketch", "InVision"] },
          { name: "Project & Product Management", years: 15, details: ["Agile", "Scrum", "Jira", "Trello", "Miro"] },
          { name: "Data Visualization & BI", years: 10, details: ["Tableau", "Power BI", "SAP", "Highcharts"] },
          { name: "CMS & Development Tools", years: 15, details: ["WordPress", "Git", "Netlify", "CodePen"] },
          { name: "Marketing & Social Media", years: 20, details: ["Digital Campaigns", "Blogs", "Video Editing"] },
          { name: "Cloud & Enterprise Technologies", years: 10, details: ["Salesforce", "Cloud Craze", "SAP"] },
          { name: "IT Infrastructure & Administration", years: 15, details: ["Hardware & Software Installation", "System Administration"] }
        ]
      };
    },
    computed: {
      sortedSkills() {
        let filtered = this.skills.filter(skill => skill.name.toLowerCase().includes(this.search.toLowerCase()));
        if (this.sortKey === "years") {
          return filtered.sort((a, b) => b.years - a.years);
        } else if (this.sortKey === "name") {
          return filtered.sort((a, b) => a.name.localeCompare(b.name));
        }
        return filtered;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  </style>