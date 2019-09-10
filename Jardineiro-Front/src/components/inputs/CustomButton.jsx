import React, { Component } from 'react'
import { Button } from "reactstrap"

export class CustomButton extends Component {
    render() {
        return (
            <Button color="success" {...this.props}>{this.props.label}</Button>
        )
    }
}