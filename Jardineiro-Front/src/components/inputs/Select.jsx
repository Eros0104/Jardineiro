import React, { Component } from 'react'
import { Input, Label, FormGroup } from 'reactstrap';

export class Select extends Component {
    render() {
        let { label, onChange, options, value } = this.props
        return (
            <FormGroup>
                <Label for="exampleSelect">{label}</Label>
                <Input onChange={o => onChange(o)} type="select">
                    {options.map(o =>
                        <option value={o.value}>{o.display}</option>
                    )}
                </Input>
            </FormGroup>
        )
    }
}
