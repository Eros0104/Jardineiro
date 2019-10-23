import React, { Component } from 'react'
import { get } from '../../functions/functions'
import { Select } from "../../components/inputs/Select"

export class SelectGenero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            isLoading: true
        }
    }

    componentDidMount = async () => {
        let options = await get("genero/select");
        this.setState({ options, isLoading: false })
    }

    render() {
        let { options } = this.state;
        return (
            <Select {...this.props} label="Genero" options={options} />
        )
    }
}
