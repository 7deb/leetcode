import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from '../context/AuthContext';


import '../styles/NavBar.css';

const NavBar = () => {
  const { authUser } = useAuthContext();
  return (
    <Navbar expand="lg" className='navbar'>
      <Container className='container'>
        <Navbar.Brand href="/home">
          <img src="./images/LClogo.png" alt="" height="25px" width="25px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link href="/explore" className='nav-link'>Explore</Nav.Link>
            <Nav.Link href="/problemset" className='nav-link'>Problems</Nav.Link>
            <Nav.Link href="/discuss" className='nav-link'>Discuss</Nav.Link>
            <NavDropdown title="Interview" id="navbarScrollingDropdown" className='interview'>
              <NavDropdown.Item href="#">Online Interview</NavDropdown.Item>
              <NavDropdown.Item href="#">Assessment</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Store" id="navbarScrollingDropdown" className='store'>
              <NavDropdown.Item href="#">Redeem</NavDropdown.Item>
              <NavDropdown.Item href="#">Premium</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            {authUser ? 
            <Nav className="ms-auto mb-2 mb-lg-0">
          <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Signup
            </NavLink>
          </Nav>
            : 
            <Nav className="ms-auto mb-2 mb-lg-0">
            <NavLink to="#" className="nav-link">
              <i className="fa-regular fa-bell"></i>
            </NavLink>
            <NavLink to="#" className="nav-link">
              <i className="fa-solid fa-fire"></i>
            </NavLink>
            <Nav.Link href="#">
              <img src="./images/dp.png" alt="" height="25px" width="25px" id='profile-pic'/>
            </Nav.Link>
            <Nav.Link href="#" className='premium'>Premium</Nav.Link>
          </Nav>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
