import React, { Component } from 'react'
import { CustomButton } from '../components/inputs/CustomButton';
import { CustomModal } from '../components/modal/CustomModal'
import axios from 'axios';

class PlantasConsultar extends Component {
    constructor(props) {
        super(props);

        this.state = { isModalOpen: false };
    }
    componentDidMount(){
        axios.get('http://localhost:8080/Seed')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
      }
    insert(){
        axios.post('http://localhost:8080/Seed', { nome: 'Weed'})
            .then(function (response) {
                console.log('salvo com sucesso')
            });
    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    render() {
        return (
            <div>
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