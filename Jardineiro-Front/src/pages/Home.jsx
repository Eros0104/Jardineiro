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


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      isLoading: true
    }
  }

  componentDidMount = async () => {
    this.refresh();
  }

  refresh = async () => {
    this.setState({ isLoading: true })
    let plants = await get("Seed");
    this.setState({ plants, isLoading: false })
  }

  deletePlant = async (id) => {
    await remove("Seed/" + id)
    await this.refresh();
  }

  render() {
    let { plants, isLoading } = this.state;
    return (
      <div>
        {this.state.plants.length !== 0 && isLoading ?
          <div className="w-100 text-center">
            <Loading size={150} />
            <br />
            <br />
            <br />
            <h2 style={{ color: variables.darkPrimary }}>Carregando...</h2>
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
                        <CustomButton color="primary"><i className="fas fa-eye"></i></CustomButton>
                        <CustomButton color="danger" onClick={() => this.deletePlant(o.codigo)}>
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
                  <Link to="/plantas-consultar">
                    <div style={{
                      cursor: "pointer",
                      transition: ".3s"
                    }}>
                      <UndrawAddFiles
                        height="100"
                        primaryColor={variables.primary} />
                    </div>
                  </Link>
                </CardStats>
              </Col> : undefined
            }
          </Row>
        }
        {this.state.plants.length === 0 && !isLoading ?
          <div className="text-center mx-auto">
            <br />
            <h3>Parece que ainda não temos nada por aqui!</h3>
            <br />
            <Undraw height="500px" name="empty" primaryColor={variables.primary} />
            <br />
            <br />
            <br />
            <CustomButton className="w-75" size="md" color="primary"> Começar! </CustomButton>
          </div>
          : undefined
        }
      </div>
    )
  }
}
