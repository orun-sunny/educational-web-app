import React from 'react';
import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../images/logo.png";
import css from "./Header.css"

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
                        <Nav className="ms-auto">
                         <Link className='text-white'  style={{paddingLeft: 13, textDecoration: 'none'}} to="/home">Home </Link>
                         <Link className='text-white' style={{paddingLeft: 13, textDecoration: 'none'}}  to="/about">About</Link>
                         <Link className='text-white' style={{paddingLeft: 13, textDecoration: 'none'}}  to="/contact">Contact</Link>
                         <Link className='text-white' style={{paddingLeft: 13, textDecoration: 'none'}}  to="/courses">Course</Link>
                         <Link className='text-white' style={{paddingLeft: 13, textDecoration: 'none'}}  to="/Signup">Sign Up</Link>
                         <Link className='text-white'  style={{paddingLeft: 13, textDecoration: 'none'}}  to="/login"></Link>
                          
                            <FontAwesomeIcon style={{fontSize: '20px', textDecoration: 'none'}} icon={faShoppingCart} />
                            <Badge  >0</Badge> 
                            
                            
                            <Link className='text-white' style={{paddingLeft: 13, textDecoration: 'none'}} link to="/log">Log in</Link>
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