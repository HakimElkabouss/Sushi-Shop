import React, { Component } from 'react';
import SecondHeader from './SecondHeader.js';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Sushi Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <NavDropdown title="Sushi's" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Lunch Boxes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">YellowTail</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Maki</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Sushi</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bowl</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Drinks</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Desserts</NavDropdown.Item>

            </NavDropdown>
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>

        <SecondHeader/>
        
      </div>
    );
  }
}

export default Header;
