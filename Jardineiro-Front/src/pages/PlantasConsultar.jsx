import React, { Component } from 'react'
import { CustomButton } from '../components/inputs/CustomButton';
import { PlantCreateModal } from '../customComponents/modal/PlantCreateModal'
import { get } from '../functions/functions.jsx'
import { SeedTable } from "../customComponents/table/SeedTable"

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
                <CustomButton icon="" onClick={() => this.consultar()} >Consultar</CustomButton>
                <CustomButton icon="" onClick={() => this.toggleModal()} >Criar Nova Planta</CustomButton>
                <PlantCreateModal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()} />
                <SeedTable />
            </div>
        )
    }
}

export default PlantasConsultar