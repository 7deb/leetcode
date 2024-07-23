import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/StudyPlan.css';

const StudyPlan = () => {
  return (
    <>
      {/* Study Plan Header */}
      <div className="d-flex flex-row" style={{ marginTop: '1rem' }}>
        <h5 className="p2" style={{color:'white'}}>Study Plan</h5>
        <a href="#" className="ms-auto" style={{ textDecoration: 'none' }}>See all</a>
      </div>

      {/* Study Plan Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Card className='sp-card-container'>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src="./images/dp.png" className="img-fluid rounded-start sp-card-img" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body className="card-oak">
                <Card.Title className='sp-card-oak-title'>Top Interview 150</Card.Title>
                <Card.Text className='sp-card-oak-text'>Must-do List for Interview Prep</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card className='sp-card-container'>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src="./images/dp.png" className="img-fluid rounded-start sp-card-img" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body className="card-oak">
                <Card.Title className='sp-card-oak-title'>LeetCode 75</Card.Title>
                <Card.Text className='sp-card-oak-text'>Ace Coding Interview with 75Qs</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card className='sp-card-container'>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src="./images/dp.png" className="img-fluid rounded-start sp-card-img" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body className="card-oak">
                <Card.Title className='sp-card-oak-title'>SQL 50</Card.Title>
                <Card.Text className='sp-card-oak-text'>Crack SQL Interview in 50 Qs</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card className='sp-card-container'>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src="./images/dp.png" className="img-fluid rounded-start sp-card-img" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body className="card-oak">
                <Card.Title className='sp-card-oak-title'>Introduction to Pandas</Card.Title>
                <Card.Text className='sp-card-oak-text'>Learn Basic Pandas in 15 Qs</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card className='sp-card-container'>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src="./images/dp.png" className="img-fluid rounded-start sp-card-img" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body className="card-oak">
                <Card.Title className='sp-card-oak-title'>30 days of JavaScript</Card.Title>
                <Card.Text className='sp-card-oak-text'>Learn JS Basics with 30 Qs</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card className='sp-card-container'>
          <Row className="g-0">
            <Col md={4}>
              <Card.Img src="./images/dp.png" className="img-fluid rounded-start sp-card-img" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body className="card-oak">
                <Card.Title className='sp-card-oak-title'>Amazon Spring'23 High Frequency</Card.Title>
                <Card.Text className='sp-card-oak-text'>Practice Amazon 25 Recently Asked Qs</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default StudyPlan;
