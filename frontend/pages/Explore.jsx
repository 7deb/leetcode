import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { PlayCircle } from 'react-bootstrap-icons';
import exploreCards from '../DS/exploreCards';
import '../styles/Explore.css';

const Explore = () => {
  

  return (
    <Container className="my-4">
      <h2 className="mb-4">Featured</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {exploreCards.map((course, index) => (
          <Col key={index}>
            <Card className="h-100 custom-card">
              <Card.Body className="position-relative">
                <Card.Title className="mb-4 fw-bold">
                  {course.description}
                </Card.Title>
                <Card.Text className="fs-3 fw-bold">
                  {course.title}
                </Card.Text>
                <PlayCircle
                  size={50}
                  className="position-absolute bottom-0 end-0 play-icon"
                />
              </Card.Body>
              <Card.Footer className="bg-white d-flex justify-content-between text-muted">
                <div>
                  <strong>{course.chapters}</strong> Chapters
                </div>
                <div>
                  <strong>{course.items}</strong> Items
                </div>
                <div>
                  {course.progress}% 
                </div>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Explore;