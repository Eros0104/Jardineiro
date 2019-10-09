import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import PlantasConsultar from "./pages/PlantasConsultar"
import Home from "./pages/Home"
import './assets/main.scss'

const routing = (
	<Router>
		<Switch>
			<App>
				<Route path="/" exact component={Home} />
				<Route path="/plantas-consultar" component={PlantasConsultar} />
			</App>
		</Switch>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
