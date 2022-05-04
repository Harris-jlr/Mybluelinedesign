<template>
  
  <div>
    <canvas id="side-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import sideChartData from '../side-data.js'

export default {
  name: 'SideChart',
  data() {
    return {
      sideChartData: sideChartData
    }
  },
  mounted() {
    const ctx = document.getElementById('side-chart');
    new Chart(ctx, this.sideChartData);
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