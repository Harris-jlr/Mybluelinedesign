
<template>
    <div>
      <canvas id="planet-chart"></canvas>
    </div>
    <div class="chartMenu">
        <p>WWW.CHARTJS3.COM (Chart JS 3.7.1)</p>
      </div>
      <div class="chartCard">
        <div class="chartBox">
          <canvas id="myChart"></canvas>
        </div>
        <div class="chartCard">
          <div class="chartBox">
            <canvas id="myChartDoughnut"></canvas>
          </div>
      </div>
</template>
   
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
   
</script>


<style>
    * {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
    .chartMenu60 {
      width: 60vw;
      height: 60px;
      background: #1A1A1A;
      color: rgb(4, 7, 29);
    }
    .chartMenu40 {
      width: 35vw;
      height: 60px;
      background: #1A1A1A;
      color: rgb(4, 7, 29);
    }
    .chartMenu p {
      padding: 10px;
      font-size: 20px;
    }
    .chartCard {
      width: 100vw;
      height: calc(100vh - 40px);
      background: rgba(255, 26, 104, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .chartBox {
      width: 700px;
      padding: 20px;
      border-radius: 20px;
      border: solid 3px rgba(255, 26, 104, 1);
      background: white;
    }
</style>