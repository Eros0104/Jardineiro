import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { Container, Row, Col } from 'reactstrap';
import { CardStats } from './components/card/CardStats';
import { Pie } from './components/charts/Pie';
import { Spinner } from 'reactstrap';
import { Sidebar } from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar isOpen={true} pageWrapId={"page-wrap"} />
      <div id={"page-wrap"}>
        <Header />
        <Container className="mt-2">
          <Row>
            <Col lg="6">
              <CardStats title="Planta 1">
                <Pie />
              </CardStats>
            </Col>
            <Col lg="6">
              <CardStats title="Planta 2">
                <Pie />
              </CardStats>
            </Col>
            <Col lg="6">
              <CardStats title="Planta 3">
                <Pie />
              </CardStats>
            </Col>
            <Col lg="6">
              <CardStats title="Planta 3">
                <Spinner color="success" />
              </CardStats>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
