import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from '../components/Courses';
import StudyPlan from '../components/StudyPlan';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Container className="text-center" style={{ margin : '0 13%'}}>
      <Row>
        <Col xs={8}>
          <Courses/>
          <StudyPlan/>
        </Col>
      </Row>
    </Container>
        
    </div>
  )
}

export default App;
