import React from 'react';
import { Header } from './components/header/Header';
import { Container, Row, Col } from 'reactstrap';
import { CardStats } from './components/card/CardStats';
import { Pie } from './components/charts/Pie';
import { Spinner } from 'reactstrap';
import { Sidebar } from './components/sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }
  }
  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="App" id="outer-container">
          <Sidebar isOpen={this.state.isMenuOpen} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
          <div id={"page-wrap"}>
            <Header expandMenu={this.toggleMenu} />
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
      </div>
    )
  }
}

export default App;
