<template>
  
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from '../planet-data.js'

export default {
  name: 'planetChart',
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}
</script>

<style>
#planet-chart {
  position: relative;
  height: 60%;
  width: 60%;
}
</style>