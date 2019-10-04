import React, { Component } from 'react'
import { PacmanLoader } from 'react-spinners';

export class Loading extends Component {
  render() {
    return (
      <div>
        <PacmanLoader
          sizeUnit={"px"}
          size={25}
          color={'green'}
          loading={true}
        />
      </div>
    )
  }
}
