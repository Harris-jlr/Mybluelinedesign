<template>
  <div class="chart-container">
  <canvas ref="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "CountryMap",

  props: {
    chartData: {
      type: Array,
      required: true,
    },
  },

  mounted: function() {
    const config = {
      type: "bar",
      data: {
        labels: [
          "25", 
          "26", 
          "27",
          "28",
          "29",
          "30",
          "31"],
        datasets: [
          {
          data: this.chartData
          },
        ]
      },
  };

  new Chart(this.$refs.chart, config);
  }
};
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>