myportfolio.vue
<template>
  <div class="flex-col max-w-8xl mx-auto px-6 py-12">
   
    <!-- Contact Icons -->
    <div class="justify-center my-2">
      <a href="https://github.com/harris-jlr" target="_blank" class="text-gray-800 text-2xl hover:text-blue-600">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/harris-jlr" target="_blank" class="text-gray-800 text-2xl hover:text-blue-600">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="mailto:judith.harris@nttdata.com" class="text-gray-800 text-2xl hover:text-blue-600">
        <i class="fas fa-envelope"></i>
      </a>
      
    </div>
    
    <!-- Skills -->
    <section class="my-12">
      <h2 class="text-2xl font-semibold text-center mb-4">Tools and Frameworks</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="skill in skills" :key="skill" class="p-4 text-center shadow-md border rounded-lg">
          {{ skill }}
        </div>
      </div>
    </section>
    
    <!-- Experience -->
    <section class="my-12">
      <h2 class="text-2xl font-semibold text-center mb-4">Experience</h2>
      <div v-for="job in experience" :key="job.company" class="mb-4 shadow-lg p-4 border rounded-lg">
        <h3 class="text-lg font-bold">{{ job.company }}</h3>
        <p>{{ job.role }} ({{ job.years }})</p>
        <ul class="list-disc pl-6">
          <li v-for="task in job.tasks" :key="task">{{ task }}</li>
        </ul>
      </div>
    </section>
    
    <!-- Contact -->
    <section class="text-center my-12">
      <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p>Email me at: 
        <a href="mailto:judith.harris@nttdata.com" class="text-blue-600 hover:underline">
          judith.harris@nttdata.com
        </a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "Vue3", "React", "JavaScript", "TypeScript", "Tailwind CSS", "WordPress",
        "Figma", "Adobe Suite", "Tableau", "Power BI", "Salesforce", "UX/UI Design"
      ],
      experience: [
        {
          company: "NTT Data",
          role: "Senior Customer Experience Builder & Associate Director",
          years: "2019 - Present",
          tasks: [
            "Lead responsive design initiatives with Vue3, React, and Tailwind",
            "Project lead for engagements using Tableau, SAP, WordPress, Salesforce"
          ]
        },
        {
          company: "NASA (Barrios Technology & Lockheed Martin)",
          role: "Senior Frontend Web Developer & Graphic Designer",
          years: "2000 - 2014",
          tasks: [
            "Developed NASA websites using ColdFusion, JavaScript, jQuery",
            "Managed social media & digital content, including video production"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
