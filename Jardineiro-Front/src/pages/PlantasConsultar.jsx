import React, { Component } from 'react'
import { CustomButton } from '../components/inputs/CustomButton';
import { PlantCreateModal } from '../customComponents/modal/PlantCreateModal'
import { get, post } from '../functions/functions.jsx'

class PlantasConsultar extends Component {
    constructor(props) {
        super(props);

        this.state = { isModalOpen: false };
    }

    consultar = async () => {

        console.log(await get('/Seed'))
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
                <PlantCreateModal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()} />
            </div>
        )
    }
}

export default PlantasConsultar