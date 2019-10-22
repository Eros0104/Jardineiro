import React from "react";

export class Temperatura extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: this.dataGenerator()
    }
  }
  dataGenerator = () => Math.floor(Math.random() * (36 - 24 + 1)) + 24 

  render() {
    return (
      <div className="text-center">
        <span className="display-2">
            {this.state.temperature} º
        </span>
      </div>
    );
  }
}