import React, { Component } from 'react'
import {
  RotateLoader
} from 'react-spinners';
import variables from "../../assets/styles/scss/bootstrap/_variables.scss"

const override = {
  margin: "0 auto",
  top: "50%",
  position: "absolute"
}

export class Loading extends Component {
  render() {
    return (
      <RotateLoader
        sizeUnit={"px"}
        css={override}
        size={this.props.size}
        color={variables.primary}
        loading={true}
      />

    )
  }
}
