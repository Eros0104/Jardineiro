import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import { CardStats } from '../components/card/CardStats';
import { LineChart } from '../components/charts/LineChart';
import { get, remove } from "../functions/api/requester"
import Undraw from 'react-undraw';
import { UndrawAddFiles } from 'react-undraw';
import { Loading } from '../components/loading/Loading'
import variables from "../assets/styles/scss/bootstrap/_variables.scss"
import { Link } from 'react-router-dom'
import { CustomButton } from "../components/inputs/CustomButton"
import { Temperatura } from "../components/board/Temperatura"
import { PlantCreateModal } from '../customComponents/modal/PlantCreateModal'


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      isLoading: true,
      isModalOpen: false
    }
  }

  componentDidMount = async () => {
    this.refresh();
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  refresh = async () => {
    this.setState({ isLoading: true })
    let plants = await get("Seed");
    this.setState({ plants, isLoading: false })
  }

  deletePlant = async (id) => {
    console.log(id)
    await remove("Seed/" + id)
    await this.refresh();
  }

  render() {
    let { plants, isLoading } = this.state;
    return (
      <div>
        {this.state.plants.length !== 0 && isLoading ?
          <div className="w-100 text-center">
            <Loading size={15} />
          </div>
          :
          <Row>
            {
              plants.map((o) =>
                <Col md={12}>
                  <CardStats header={
                    <Row>
                      <Col>
                        {o.nome}
                      </Col>
                      <Col className="text-right">
                        <CustomButton className="m-1" color="primary"><i className="fas fa-eye"></i></CustomButton>
                        <CustomButton color="danger" onClick={() => this.deletePlant(o.id)}>
                          <i className="fas fa-trash-alt"></i>
                        </CustomButton>
                      </Col>
                    </Row>
                  }>
                    <Row>
                      <Col md={6}>
                        <CardStats header={"Temperatura"}>
                          <Temperatura />
                        </CardStats>
                      </Col>
                      <Col md={6}>
                        <CardStats header={"Umidade"}>
                          <LineChart />
                        </CardStats>
                      </Col>
                    </Row>
                  </CardStats>
                </Col>
              )
            }
            {this.state.plants.length !== 0 ?
              <Col>
                <CardStats style={{ height: "95%" }}>
                  <div onClick={() => this.toggleModal()}>
                    <div style={{
                      cursor: "pointer",
                      transition: ".3s"
                    }}>
                      <UndrawAddFiles
                        height="300px"
                        primaryColor={variables.primary} />
                    </div>
                  </div>
                </CardStats>
              </Col> : undefined
            }
          </Row>
        }
        {
          this.state.plants.length === 0 && !isLoading ?
            <div className="text-center mx-auto">
              <br />
              <h3>Parece que ainda não temos nada por aqui!</h3>
              <br />
              <Undraw height="300px" name="empty" primaryColor={variables.primary} />
              <br />
              <br />
              <br />
              <CustomButton onClick={() => this.toggleModal()} className="w-75" size="md" color="primary"> Começar! </CustomButton>
            </div>
            : undefined
        }
        <PlantCreateModal onSave={() => this.refresh()} isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()} />
      </div>
    )
  }
}
