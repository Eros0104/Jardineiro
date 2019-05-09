import React from "react";
var Chart = require("chart.js");

class Pie extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "pie",
      data: {
        datasets: [{
          data: [10, 20, 30]
        }],
        labels: ["Red", "Blue", "Yellow"]        
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

export { Pie }