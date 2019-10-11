import React from 'react';
import { Header } from './components/header/Header';
import { Container } from 'reactstrap';
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
  handleStateChange(state) {
    this.setState({ isMenuOpen: state.isOpen })
  }
  render() {
    return (
      <div>
        <ToastContainer />
        <div className="App" id="outer-container">
          <Sidebar
            onStateChange={(s) => this.handleStateChange(s)}
            isOpen={this.state.isMenuOpen}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"} />
          <div id={"page-wrap"}>
            <Header expandMenu={this.toggleMenu} />
            <br />
            <Container fluid>
              {this.props.children}
            </Container>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
