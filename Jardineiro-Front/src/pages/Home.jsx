import React, { Component } from 'react'
import { Spinner, Row, Col } from 'reactstrap';
import { CardStats } from '../components/card/CardStats';
import { Pie } from '../components/charts/Pie';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg="6">
            <CardStats title="Planta 1">
              <Pie />
            </CardStats>
          </Col>
          <Col lg="6">
            <CardStats title="Planta 2">
              <Pie />
            </CardStats>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <CardStats title="Planta 3">
              <Pie />
            </CardStats>
          </Col>
          <Col lg="6">
            <CardStats title="Planta 3">
              <Spinner color="success" />
            </CardStats>
          </Col>
        </Row>
      </div>
    )
  }
}
