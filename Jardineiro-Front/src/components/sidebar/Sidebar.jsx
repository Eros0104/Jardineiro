import React from 'react';
import { elastic as Menu } from 'react-burger-menu'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import { Link } from "react-router-dom"

class Sidebar extends React.Component {

	render() {		
		return (
			<Menu {...this.props} customBurgerIcon={ false }>
				<Link id="home" className="menu-item" to="/"><HomeTwoToneIcon/> Home</Link>
				<Link id="about" className="menu-item" to="/plantas-consultar">Minhas Plantas</Link>
			</Menu>
		);
	}
}

export { Sidebar }