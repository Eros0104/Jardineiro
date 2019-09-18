import React, { Component } from 'react'
import { CustomButton } from '../components/inputs/CustomButton';
import { CustomModal } from '../components/modal/CustomModal'
import axios from 'axios';

class PlantasConsultar extends Component {
    constructor(props) {
        super(props);

        this.state = { isModalOpen: false };
    }

    consultar = async () => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        let list = await axios.get('http://localhost:8080/Seed', config)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(list)
    }
    insert() {
        axios.post('http://localhost:8080/Seed', { nome: 'Weed' })
            .then(response => console.log(response));
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