import React, { Component } from 'react'
import { CustomButton } from '../../components/inputs/CustomButton';
import { CustomModal } from '../../components/modal/CustomModal'
import { get, post } from '../../functions/functions.jsx'
import { Row, Col } from 'reactstrap'
import { TextInput } from '../../components/inputs/TextInput'

export class PlantCreateModal extends Component {
    insert() {
        post('/Seed', { nome: "Weed" })
    }
    render() {
        return (
            <CustomModal {...this.props} size={"lg"} title="Nova Planta">
                <Row>
                    <Col>
                        <TextInput label={"Apelido:"} />
                    </Col>
                    <Col>
                        <TextInput label={""} />
                    </Col>
                </Row>
                <CustomButton label="Criar Nova Planta" icon="" onClick={() => this.insert()} />
            </CustomModal>
        )
    }
}
