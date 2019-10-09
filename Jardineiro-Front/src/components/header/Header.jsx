import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import Headroom from "react-headroom"

export class Header extends Component {
	render() {
		return (
			<Headroom>
				<nav class="navbar navbar-light bg-light text-left shadow-sm">
					<button className="rounded border" style={{ cursor: 'pointer' }} onClick={() => this.props.expandMenu()}>
						<MenuIcon />
					</button>
					<a class="navbar-brand" href="#">
						<img src="folhinha.svg" width="30" height="30" alt="nao carregou" />
					</a>
				</nav>
			</Headroom>
		)
	}
}
