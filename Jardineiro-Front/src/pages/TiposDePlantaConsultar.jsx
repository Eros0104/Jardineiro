import React, { Component } from 'react'
import { CustomButton } from '../components/inputs/CustomButton';
import { PlantCreateModal } from '../customComponents/modal/PlantCreateModal'
import { get } from '../functions/functions.jsx'
import { Table } from "../components/table/Table"

class TiposDePlantaConsultar extends Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
    }


    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    render() {
        return (
            <div className="w-100">
                <div className="text-right">
                    <CustomButton icon="" onClick={() => this.toggleModal()} >
                        Adicionar Tipo de Planta <i className="fas fa-plus"></i>
                    </CustomButton>
                </div>
                <hr />
                <PlantCreateModal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()} />
                <Table dataUrl="tipo-planta/table" />
            </div>
        )
    }
}

export default TiposDePlantaConsultar