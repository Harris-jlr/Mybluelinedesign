<template>
  <div id="app">
    <PlanetChart/>
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
  height: 100%;
  width: 100%;
}
</style>