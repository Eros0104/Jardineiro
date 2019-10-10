import React, { Component } from 'react'
import Headroom from "react-headroom"

export class Header extends Component {
	render() {
		return (
			<Headroom>
				<nav
					class="navbar navbar-light bg-light text-left shadow-sm"
					>
					<div onClick={() => this.props.expandMenu()}>
						<i className="fas fa-bars h3"></i>
					</div>
					<a class="navbar-brand" href="#">
						<img src="folhinha.svg" width="30" height="30" alt="nao carregou" />
					</a>
				</nav>
			</Headroom>
		)
	}
}
