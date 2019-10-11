import React, { Component } from 'react'
import {
  RingLoader
} from 'react-spinners';
import variables from "../../assets/styles/scss/bootstrap/_variables.scss"

const override = {
  margin: "0 auto",
  marginTop: "100px"
}

export class Loading extends Component {
  render() {
    return (
      <RingLoader
        sizeUnit={"px"}
        css={override}
        size={this.props.size}
        color={variables.primary}
        loading={true}
      />

    )
  }
}
