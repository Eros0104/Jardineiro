import React, { Component } from 'react'
import { Spinner, Row, Col, Button } from 'reactstrap';
import { CardStats } from '../components/card/CardStats';
import { Pie } from '../components/charts/Pie';
import { get } from "../functions/api/requester"
import Undraw from 'react-undraw';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: []
    }
  }

  componentDidMount = async () => {
    let plants = await get("Seed");
    console.log(plants)
    this.setState({ plants })
  }

  render() {
    let { plants } = this.state;
    return (
      <div>
        <Row>
          {
            plants.map((o) =>
              <Col md={6}>
                <CardStats header={
                  <Row>
                    <Col>
                      {o.nome}
                    </Col>
                    <Col className="text-right">
                      <Button color="primary"><i className="fas fa-eye"></i></Button>
                      <Button color="danger"><i className="fas fa-trash-alt"></i></Button>
                    </Col>
                  </Row>
                }>
                  <Pie />
                </CardStats>
              </Col>
            )
          }
        </Row>
        <div className="text-center mx-auto">
          <br/>
          <h3>Parece que ainda não temos nada por aqui!</h3>
          <br/>
          <Undraw height="500px" name="empty" primaryColor="#28a745" />
          <br/>
          <Button className="w-75" color="primary"> Começar! </Button>
        </div>
      </div>
    )
  }
}
