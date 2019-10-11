import React from "react";
import variables from "../../assets/styles/scss/bootstrap/_variables.scss"
var Chart = require("chart.js");

export class LineChart extends React.Component {
  constructor(props) {
    super(props);
  }

  dataGenerator() {
    let list = []
    for (let i = 0; i < 7; i++) 
      list.push(
        Math.floor(Math.random() * (100 - 15 + 1)) + 15
      )
    
    return list;
  }
  componentDidMount() {
    const node = this.node;
    const color = variables.info;
    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: ["ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT"],
        datasets: [{
          label: "Umidade",
          borderColor: color,
          pointBorderColor: color,
          pointBackgroundColor: color,
          pointHoverBackgroundColor: color,
          pointHoverBorderColor: color,
          pointBorderWidth: 10,
          pointHoverRadius: 10,
          pointHoverBorderWidth: 1,
          pointRadius: 3,
          fill: false,
          borderWidth: 4,
          data: this.dataGenerator()
        }]
      }
    });
  }

  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}