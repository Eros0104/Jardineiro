import React from 'react';
import { elastic as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom"

class Sidebar extends React.Component {

	render() {		
		return (
			<Menu {...this.props} customBurgerIcon={ false }>
				<Link id="home" className="menu-item" to="/"><i className="fas fa-chart-bar"></i> Dashboard</Link>
				<Link id="about" className="menu-item" to="/plantas-consultar"><i className="fas fa-leaf"></i> Minhas Plantas</Link>
				<Link id="about" className="menu-item" to="/tipos-planta-consultar"><i className="fas fa-seedling"></i> Tipos de Planta</Link>
			</Menu>
		);
	}
}

export { Sidebar }