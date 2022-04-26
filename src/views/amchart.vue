<template>
  <div class="hello" ref="chartdiv">
   <div id="chartdiv" class="chartdiv"></div>
   </div>
</template>


<script>
import { Options, Vue } from 'vue-class-component'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import '@amcharts/amcharts4/charts';

let chart: am4core.Sprite;
let chartConfiguration: object = {
  "type": "XYChart",
  "data": [{
      "category": "Category #1",
      "value": 4032
  }, {
      "category": "Category #2",
      "value": 724
  }, {
      "category": "Category #3",
      "value": 4015
  }, {
      "category": "Category #4",
      "value": 4232
  }],
  "xAxes": [{
      "type": "ValueAxis",
      "renderer": {
          "maxLabelPosition": 0.98
      }
  }],
  "yAxes": [{
      "type": "CategoryAxis",
      "dataFields": {
          "category": "category"
      },
      "renderer": {
          "grid": {
              "template": {
                  "type": "Grid",
                  "location": 0
              }
          },
      }
  }],
  "series": [{
      "type": "ColumnSeries",
      "columns": {
          "template": {
              "type": "Column",
              "strokeOpacity": 0,
              "tooltipText": "{categoryY}\n{valueX}",
              "tooltipPosition": "pointer"
          }
      },
      "dataFields": {
          "valueX": "value",
          "categoryY": "category"
      },
  }]
};

@Options({
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string

  mounted() {
    this.renderChart();
  }

  renderChart() {
    if (chart) {
      chart.dispose();
    }
    chart = am4core.createFromConfig(
      // IMPORTANT: for performance considerations amCharts performs some 
      // operations directly on the passed configuration object. For this
      // reason, in cases when you need the configuration to remain intact
      // after rendering a chart, you should never pass a chart configuration
      // object directly to am4core.createFromConfig and pass a copy instead.
      JSON.parse(JSON.stringify(chartConfiguration)), 
      'chartdiv'
    );
  }

  unmounted() {
    if (chart) {
      chart.dispose();
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 500px;
}
</style>