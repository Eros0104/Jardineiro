import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {

	render() {		
		return (
			<Menu>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/PlantasConsultar">About</a>
			</Menu>
		);
	}
}

export { Sidebar }