import React, { Component } from 'react'
import { Button } from "reactstrap"

export class CustomButton extends Component {
    render() {
        return (
            <Button {...this.props} color="success">{this.props.children}</Button>
        )
    }
}