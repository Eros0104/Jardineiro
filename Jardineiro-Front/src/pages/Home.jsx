import React, { Component } from 'react'
import { Spinner, Row, Col } from 'reactstrap';
import { CardStats } from '../components/card/CardStats';
import { Pie } from '../components/charts/Pie';
import { get } from "../functions/api/requester"

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
                <CardStats title={o.nome}>
                  <Pie />
                </CardStats>
              </Col>
            )
          }
          <Col md={6}>
            <div className="m-auto">
              <i className="fas fa-plus-square"></i>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
