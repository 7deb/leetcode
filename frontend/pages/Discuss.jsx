import React from 'react'
import { Container, Row, Col, Nav} from 'react-bootstrap';
import Companies from '../components/Companies';
import DiscussQs from '../components/DiscussQs';
import '../styles/Discuss.css';

const Discuss = () => {


return (
    <Container fluid>
        <Row className="mt-3 justify-content-center">
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
            <Col md={8}>
                <DiscussQs/>
            </Col>
            <Col md={4}>
                <Companies/>
            </Col>
        </Row>
    </Container>
);
}

export default Discuss