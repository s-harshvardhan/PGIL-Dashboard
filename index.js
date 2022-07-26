
var xValues = ["Feb'22", "Mar'22", "Apr'22", "May'22", "Jun'22"];
var yValues = [55, 49, 50, 65, 44];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Total production in last 5 months; Values in y-axis are in thousand pieces"
    }
  }
});



var xArray = ["Macy's", "Next", "Lane Bryant", "GAP", "JC Penny's"];
var yArray = [55, 49, 44, 24, 15];

var layout = {title:"Brand wise production percentage in 2022 so far"};

var data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);