import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/styles/css/main.css"
import "@fortawesome/fontawesome-free/css/all.css"

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { PlantasConsultar, Home, TiposDePlantaConsultar } from "./pages"

const routing = (
	<Router>
		<Switch>
			<App>
				<Route path="/" exact component={Home} />
				<Route path="/plantas-consultar" component={PlantasConsultar} />
				<Route path="/tipos-planta-consultar" component={TiposDePlantaConsultar} />
			</App>
		</Switch>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
