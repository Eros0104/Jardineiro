import React from 'react';
import { elastic as Menu } from 'react-burger-menu'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';

class Sidebar extends React.Component {

	render() {		
		return (
			<Menu {...this.props} customBurgerIcon={ false }>
				<a id="home" className="menu-item" href="/"><HomeTwoToneIcon/> Home</a>
				<a id="about" className="menu-item" href="/PlantasConsultar">About</a>
			</Menu>
		);
	}
}

export { Sidebar }