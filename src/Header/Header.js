import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div>

            <Navbar style={{
        backgroundColor: 'blue'
      }} expand="lg">
                <Container className='text-white'>
                    <Navbar.Brand className='text-white' href="#home"> <img width="90px" src={logo } alt=" " />    Educational web </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                            <Nav.Link className='text-white' href="#link">Link</Nav.Link>
                            <Nav.Link className='text-white' href="#Signup">Sign Up</Nav.Link>
                            <Nav.Link className='text-white' href="#log">
                            <Nav.Link className='text-white' href="#log">
                            <FontAwesomeIcon style={{fontSize: '20px'}} icon={faShoppingCart} />
                            <Badge  >0</Badge>
                            </Nav.Link>
                            </Nav.Link>
                            <Nav.Link className='text-white' href="#log">Log in</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;