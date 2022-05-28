import React from 'react';
import { Link } from "react-router-dom";
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../images/logo.png";
// import css from "./Header.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hook/useAuth';


const Header = () => {
    const { user,logOut } = useAuth();
    const {displayName,photoURL,email} = user;
    return (
        <div>

            <Navbar style={{
                backgroundColor: 'blue'
            }} expand="lg">
                <Container className='text-white'>
                    <Navbar.Brand className='text-white' href="#home"> <img width="90px" src={logo} alt=" " />    Educational web </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link className='text-white' style={{ paddingLeft: 13, textDecoration: 'none' }} to="/home">Home </Link>
                            <Link className='text-white' style={{ paddingLeft: 13, textDecoration: 'none' }} to="/about">About</Link>
                            <Link className='text-white' style={{ paddingLeft: 13, textDecoration: 'none' }} to="/contact">Contact</Link>
                            <Link className='text-white' style={{ paddingLeft: 13, textDecoration: 'none' }} to="/courses">Course</Link>
                            <Link to="/cart">
                                <FontAwesomeIcon style={{ fontSize: '20px', textDecoration: 'none' }} icon={faShoppingCart} />
                                <Badge  >0</Badge>
                            </Link>
                            {!displayName ? (<>
                                <Link className='text-white' style={{ paddingLeft: 13, textDecoration: 'none' }} to="/Signup">Sign Up</Link>
                                <Link className='text-white' style={{ paddingLeft: 13, textDecoration: 'none' }} to="/login">Log in</Link>
                            </>

                            ) : (
                                <NavDropdown title= {
                                    <img style={{width: "45px",borderRadius:"50%",}} src={photoURL} alt=" "/>
                                } id="basic-nav-dropdown">

                                    <div className='text-center'>
                                        <h6>{displayName}</h6>
                                        <button onClick={logOut} className='btn btn-primary '>sign Out</button>

                                    </div>
                                    
                                </NavDropdown>
                            )}
                            {/* <Link className='text-white'  style={{paddingLeft: 13, textDecoration: 'none'}}  to="/log">login</Link> */}






                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;