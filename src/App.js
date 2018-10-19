import React, { Component } from 'react';
import { NavbarBrand, Navbar, NavItem, NavbarToggler, Collapse, Nav, Button, Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar color="dark" light expand="md"> 
          <NavbarBrand href="/" className="text-white"><b>Entom</b> ToDoApp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button color="primary">Add</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container>
          <Row>
            <Col xs="9"></Col>
            <Col xs="3"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
