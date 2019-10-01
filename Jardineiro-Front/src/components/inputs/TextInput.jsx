import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

export class TextInput extends Component {
    render() {
        let {  label, placeholder } = this.props
        return (
            <div>
                <label>{label}</label><br/>                
                <Input placeholder={placeholder} />
            </div>
        )
    }
}
