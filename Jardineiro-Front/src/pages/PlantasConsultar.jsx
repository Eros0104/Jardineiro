import React, { Component } from 'react'
import { CustomButton } from '../components/inputs/CustomButton';
import { CustomModal } from '../components/modal/CustomModal'
import { get, post } from '../functions/functions.jsx'

class PlantasConsultar extends Component {
    constructor(props) {
        super(props);

        this.state = { isModalOpen: false };
    }

    consultar = async () => {

        console.log(await get('/Seed'))
    }
    insert() {
        post('/Seed', { nome: "Weed" })
    }

    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    render() {
        return (
            <div>
                <CustomButton label="Consultar" icon="" onClick={() => this.consultar()} />
                <CustomButton label="Criar Nova Planta" icon="" onClick={() => this.toggleModal()} />
                Plantas Consultar
                <CustomModal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()} title="Nova Planta">
                    <CustomButton label="Criar Nova Planta" icon="" onClick={() => this.insert()} />
                </CustomModal>
            </div>
        )
    }
}

export default PlantasConsultar