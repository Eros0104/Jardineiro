import React, { Component } from 'react'
import { Button } from "reactstrap"

export class CustomButton extends Component {
    render() {
        let { size, color } = this.props;
        return (
            <Button {...this.props}
                size={size ? size : "sm"}
                color={color ? color : "primary"}>
                {this.props.children}
            </Button>
        )
    }
}