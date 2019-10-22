import React, { Component } from 'react'
import { CustomCreateModal } from '../../components/modal/CustomCreateModal'
import { get, post } from '../../functions/functions.jsx'
import { Row, Col } from 'reactstrap'
import { TextInput } from '../../components/inputs/TextInput'

export class PlantCreateModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model: undefined,
            isLoading: true
        }
    }
    componentDidMount = async () => {
        let model = await get('Seed/model');
        this.setState({ model, isLoading: false })
    }
    insert = async () => {
        let { onSave } = this.props

        this.setState({ isLoading: true })
        await post('/Seed', this.state.model)
        this.setState({ isLoading: false })
        if (onSave)
            onSave()
    }
    handleInput = (value, property) => {
        let { model } = this.state
        model[property] = value;
        this.setState({ model })
    }
    render() {
        return (
            <CustomCreateModal
                {...this.props}
                modelUrl="seed/model"
                size={"lg"}
                title="Nova Planta"
                onSave={() => this.insert()}
                isLoading={this.state.isLoading}>
                <Row>
                    <Col>
                        <TextInput
                            label={"Apelido:"}
                            placeholder="insira um apelido..."
                            onChange={event => this.handleInput(event.target.value, 'nome')} />
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </CustomCreateModal>
        )
    }
}
