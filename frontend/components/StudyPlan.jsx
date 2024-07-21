import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/StudyPlan.css';

const StudyPlan = () => {
  return (
    <>
      {/* Study Plan Header */}
      <div className="d-flex flex-row" style={{ marginTop: '1rem' }}>
        <h5 className="p2">Study Plan</h5>
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
                <Card.Title style={{ color: 'white' }}>Top Interview 150</Card.Title>
                <Card.Text style={{ color: 'white' }}>Must-do List for Interview Prep</Card.Text>
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
                <Card.Title style={{ color: 'white' }}>LeetCode 75</Card.Title>
                <Card.Text style={{ color: 'white' }}>Ace Coding Interview with 75Qs</Card.Text>
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
                <Card.Title style={{ color: 'white' }}>SQL 50</Card.Title>
                <Card.Text style={{ color: 'white' }}>Crack SQL Interview in 50 Qs</Card.Text>
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
                <Card.Title style={{ color: 'white' }}>Introduction to Pandas</Card.Title>
                <Card.Text style={{ color: 'white' }}>Learn Basic Pandas in 15 Qs</Card.Text>
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
                <Card.Title style={{ color: 'white' }}>30 days of JavaScript</Card.Title>
                <Card.Text style={{ color: 'white' }}>Learn JS Basics with 30 Qs</Card.Text>
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
                <Card.Title style={{ color: 'white' }}>Amazon Spring'23 High Frequency</Card.Title>
                <Card.Text style={{ color: 'white' }}>Practice Amazon 25 Recently Asked Qs</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default StudyPlan;
