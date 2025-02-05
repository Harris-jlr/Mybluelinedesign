<template>
  <div class="bg-gray-900 flex items-center justify-center">
    <div class="max-w-6xl mt-6 bg-gray-900 text-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
      <!-- Profile Image -->
      <div class="w-full  md:w-1/3 bg-cover bg-center" style="background-image: url('/assets/IMG_6546.jpg');"></div>

      <!-- Content -->
      <div class="p-6 flex-1">
        <h1 class="text-4xl font-bold mb-2">Hi, I'm Judy! 👋</h1>
        <h2 class="text-xl font-semibold text-sky-400 mb-4">I'm a Senior Experience Builder from Texas.</h2>
        <p class="text-gray-300 mb-4">
          With over 30 years of expertise in web development, UX/UI design, and digital transformation, I specialize in creating seamless user experiences and leading innovative projects.
        </p>
        <p class="text-gray-300 mb-4">
          I have a passion for learning, creating, and inspiring. My favorite tools include Vue.js, React, and Adobe Suite, and I enjoy crafting intuitive designs and functional solutions.
        </p>

        <!-- Buttons -->
        <div class="flex items-center space-x-4">
          <a href="#contact" class="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600">
            Contact Me
          </a>
          <a href="#portfolio" class="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600">
            See My Projects
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
</style>
