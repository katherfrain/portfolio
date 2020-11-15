import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Navbar, NavbarBrand } from 'reactstrap';
import './Navbar.css'

function CustomizedNavbar() {
    return (
        <Navbar className='customNav' expand='large' >
        <NavbarBrand className ='title' href="/">Katherine Frain's<br /> Portfolio </NavbarBrand>
            <Col>
                <Col><Link to="/"><img className='navBarStandard' src="https://img.icons8.com/wired/64/000000/home-page.png"/> <br />Home</Link></Col></Col>
            <Col> 
                <Col><Link to="/projects"><img className='navBarStandard' src="https://img.icons8.com/dotty/80/000000/portfolio.png"/><br />Projects</Link> </Col></Col>
            <Col> 
                <Col><Link to='/github'><img className='navBarStandard' src="https://img.icons8.com/wired/64/000000/github.png"/><br />Github</Link></Col></Col>
            <Col> 
                <Col><Link to='/linkedin'><img className='navBarStandard' src="https://img.icons8.com/wired/64/000000/linkedin.png"/><br />LinkedIn</Link></Col></Col>
      </Navbar>
    )
}
export default CustomizedNavbar;