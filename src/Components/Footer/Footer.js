import React from 'react';
import { ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import footerBG from "../../images/footer-bg.png";
import logo from "../../images/logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faEnvelope,faPhone,faLocation} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className='text-white'>
           
            
                <div style={{background: `url(${ footerBG} )`}}>
                <Container>
                    
                    <Row>
                      <Col md={6}>
                      <div>
                          <img width="90px"  src={logo} alt="" />
                      </div>
                      <ul className='list-unstyled'>
                          <li> <FontAwesomeIcon icon={faLocation}/>
                          chuadanga bangladesh
                              </li>
                          <li>
                          <FontAwesomeIcon icon={faEnvelope}/>
                          chuadanga bangladesh
                          </li>
                          <li>
                          <FontAwesomeIcon icon={faPhone}/>
                          chuadanga bangladesh
                          </li>
                      </ul>

                      </Col>
                      <Col md={2} ></Col>
                      <Col md={4}></Col>

                    </Row>
                 
                        
                   
             
               
                </Container>
                </div>
                <p className="text-center py-3 bg-info">

                </p>


            
        </div>
    );
};

export default Footer;