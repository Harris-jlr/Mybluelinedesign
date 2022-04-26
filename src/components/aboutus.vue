<template>
  <div class="bg-white">
    <div class="mx-auto py-2 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-2">
      <div class="space-y-8">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-4xl xl:max-w-none">
          <h2 class="text-3xl pt-6 font-bold tracking-tight sm:text-4xl">Sample Pages</h2>
          <p class="text-xl text-gray-500">We have created a few sample views to display different ways you can explore the data. </p>
        </div>
        <div> 
          <PlanetChart/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanetChart from '/src/components/PlanetChart.vue'

export default {
  name: 'App',
  components: {
    PlanetChart
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 60%;
  width: 60%;
}
</style>