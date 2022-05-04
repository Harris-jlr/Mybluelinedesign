export const sideChartData = {
    type: "pie",
    data: {
      
      datasets: [
        {
          label: "Number of Cars",
          type: "pie",
          data: [0, 0, 1, 27, 14],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        
      }
    }
  };
  
  export default sideChartData;