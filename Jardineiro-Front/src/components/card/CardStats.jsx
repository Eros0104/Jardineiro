import React, { Component } from 'react'
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap';

export class CardStats extends Component {
  render() {
    return (
      <Card className="shadow-sm">
        <CardHeader>{this.props.header}</CardHeader>
        <CardBody>
          <div>
            {this.props.children}
          </div>
        </CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
  }
}
