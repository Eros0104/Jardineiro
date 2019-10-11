import React, { Component } from 'react'
import Headroom from "react-headroom"
import { Row, Col, Button } from "reactstrap"

export class Header extends Component {  
  render() {
    return (
      <Headroom>
        <div className="bg-primary text-light text-left shadow-sm py-2 h3">
          <Row className="mx-2">
            <Col>
              <div className="btn-burger" style={{cursor: "pointer"}} onClick={() => this.props.expandMenu()} className>
                <i className="fas fa-bars h3"></i>
              </div>
            </Col>
            <Col className="text-right">
              <i className="fas fa-leaf"></i>
            </Col>
          </Row>
        </div>
      </Headroom>
    )
  }
}
