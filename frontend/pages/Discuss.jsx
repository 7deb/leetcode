import React from 'react'
import { Container, Row, Col, Nav, Tab, ListGroup, Badge, FormControl, Button } from 'react-bootstrap';

const Discuss = () => {
  return (
    <Container fluid>
      <Row className="mt-3">
      <Nav variant="pills justify-content-center">
              <Nav.Item>
                <Nav.Link eventKey="interview-question">Interview Question</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="interview-experience">Interview Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="compensation">Compensation</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="career">Career</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="study-guide">Study Guide</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="general-discussion">General Discussion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="support-feedback">Support & Feedback</Nav.Link>
              </Nav.Item>
            </Nav>
        <Col md={9}>
          <Tab.Container defaultActiveKey="interview-question">
            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="interview-question">
                {/* Example of questions list */}
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h5>Google Online Assessment Questions</h5>
                    <p>Views: <Badge variant="info">749.6K</Badge> Replies: <Badge variant="info">2.7K</Badge></p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <h5>How to write an Interview Question post</h5>
                    <p>Views: <Badge variant="info">171.0K</Badge> Replies: <Badge variant="info">583</Badge></p>
                  </ListGroup.Item>
                  {/* Add more questions as needed */}
                </ListGroup>
              </Tab.Pane>
              {/* Add more Tab.Pane components for other tabs */}
            </Tab.Content>
          </Tab.Container>
        </Col>
        <Col md={3}>
          <div className="sticky-top">
            <h5>Tags</h5>
            <FormControl type="text" placeholder="Search for tags..." className="mb-2" />
            <Button variant="outline-secondary" className="w-100 mb-2">google</Button>
            <Button variant="outline-secondary" className="w-100 mb-2">amazon</Button>
            <Button variant="outline-secondary" className="w-100 mb-2">facebook</Button>
            {/* Add more tags as needed */}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Discuss