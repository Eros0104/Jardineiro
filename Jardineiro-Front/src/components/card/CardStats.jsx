import React, { Component } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

export class CardStats extends Component {
  render() {
    return (
      <Card>
        <CardHeader>{this.props.title}</CardHeader>
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
