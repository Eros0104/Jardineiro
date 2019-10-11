import React, { Component } from 'react'
import Headroom from "react-headroom"
import { Row, Col } from "reactstrap"

export class Header extends Component {
	render() {
		return (
			<Headroom>
				<div className="bg-primary text-light text-left shadow-sm">
					<Row>
						<Col>
							<div className="btn-burger" onClick={() => this.props.expandMenu()} className>
								<i className="fas fa-bars h3"></i>
							</div>
						</Col>
						<Col>
							<img src="folhinha.svg" width="30" height="30" alt="nao carregou" />
						</Col>
					</Row>
				</div>
			</Headroom>
		)
	}
}
