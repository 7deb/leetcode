import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container className='container'>
        <Navbar.Brand href="#">
          <img src="./images/LClogo.png" alt="" height="25px" width="25px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className='nav-link'>Explore</Nav.Link>
            <Nav.Link href="#" className='nav-link' id='active'>Problems</Nav.Link>
            <Nav.Link href="#" className='nav-link'>Contest</Nav.Link>
            <Nav.Link href="#" className='nav-link'>Discuss</Nav.Link>
            <NavDropdown title="Interview" id="navbarScrollingDropdown" className='interview'>
              <NavDropdown.Item href="#">Online Interview</NavDropdown.Item>
              <NavDropdown.Item href="#">Assessment</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Store" id="navbarScrollingDropdown" className='store'>
              <NavDropdown.Item href="#">Redeem</NavDropdown.Item>
              <NavDropdown.Item href="#">Premium</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto mb-2 mb-lg-0">
            <NavLink to="/login" className="nav-link">
              <i className="fa-regular fa-bell"></i>
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              <i className="fa-solid fa-fire"></i>
            </NavLink>
            <Nav.Link href="#">
              <img src="./images/dp.png" alt="" height="25px" width="25px" id='profile-pic'/>
            </Nav.Link>
            <Nav.Link href="#" className='premium'>Premium</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
