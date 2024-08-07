import React from 'react'
import '../styles/Home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    
<div>
<Container fluid className="p-0">
      <Row className="hero-section text-center text-md-left">
        <Col md={6} className="hero-image-container">
          <img src="../images/tablet.png" alt="Hero" className="hero-image"/>
        </Col>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div>
            <h1 className="hero-title">A New Way to Learn</h1>
            <p className="hero-subtitle">
              LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
            </p>
            <Button variant="success" className="hero-button">Create Account</Button>
          </div>
        </Col>
      </Row>
      <Row className="explore-section">
        <Col md={6}>
          <h2 className="explore-title">Start Exploring            <img src="../images/startExploring.png" width={50}/></h2>
          <p className="explore-subtitle">
            Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.
          </p>
          <a href='' className='explore-button'>Get Started</a>
        </Col>
        <Col md={6} className="explore-images-container cards">
          <img src="../images/c3.png" alt="" className="explore-image cards-1"/>
          <img src="../images/c2.png" alt="" className="explore-image cards-2"/>
          <img src="../images/c1.png" alt="" className="explore-image cards-3"/>  
        </Col>
      </Row>
      <Row className="qc4-section">
        <Col md={6} className='qc4-section-inner' style={{borderRight:"3px solid white"}}>
          {/* <img src="../images/startExploring.png" width={50}/> */}
          <h2 className="qc4-title">Start Exploring</h2>
          <p className="qc4-subtitle">
            Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.
          </p>
          <a href='' className='qc4-button'>Get Started</a>
        </Col>
        <Col md={6} className='qc4-section-inner'>
        {/* <img src="../images/startExploring.png" width={50}/> */}
        <h2 className="qc4-title">Start Exploring</h2>
          <p className="qc4-subtitle">
            Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.
          </p>
          <a href='' className='qc4-button'>Get Started</a>  
        </Col>
      </Row>
    </Container>
</div>
  )
}

export default Home