import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

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
            <Nav.Link href="#"  className='nav-link'>Explore</Nav.Link>
            <Nav.Link href="#" className='nav-link active'  >Problems</Nav.Link>
            <Nav.Link href="#"  className='nav-link'>Contest</Nav.Link>
            <Nav.Link href="#"  className='nav-link'>Discuss</Nav.Link>
            <NavDropdown title="Interview" id="navbarScrollingDropdown" style={{ backgroundColor: '#282828',  color: 'white', opacity: 0.4 }} >
              <NavDropdown.Item href="#"  className='nav-link'>Online Interview</NavDropdown.Item>
              <NavDropdown.Item href="#"  className='nav-link'>Assessment</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Store" id="navbarScrollingDropdown" style={{ backgroundColor: '#282828', color: '#FF931C' }}>
              <NavDropdown.Item href="#" style={{ color: '#FF931C' }} className='nav-link'>Redeem</NavDropdown.Item>
              <NavDropdown.Item href="#" style={{ color: '#FF931C' }} className='nav-link'>Premium</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="#"  className='nav-link'>
              <i className="fa-regular fa-bell"></i>
            </Nav.Link>
            <Nav.Link href="#" className='nav-link'>
              <i className="fa-solid fa-fire"></i>
            </Nav.Link>
            <Nav.Link href="#">
              <img src="./images/dp.png" alt="" height="25px" width="25px" style={{ borderRadius: '50%' }} />
            </Nav.Link>
            <Nav.Link href="#" style={{ backgroundColor: '#534024', color: '#FF931C', borderRadius: '10px' }}>Premium</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
