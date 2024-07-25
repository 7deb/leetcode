import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from '../components/Courses';
import StudyPlan from '../components/StudyPlan';
import TopicList from '../components/TopicList';
import Calender from '../components/Calender';
import TopicList2 from '../components/TopicList2';
import ProblemList from '../components/ProblemList';
import Companies from '../components/Companies';

const Problems = () => {
  return (
    <div>
      <NavBar/>
      <Container className="text-center">
      <Row>
        <Col xs={8}>
          <Courses/>
          <StudyPlan/>
          <TopicList/>
          <TopicList2/>
          <ProblemList/>
        </Col>
        <Col xs={4}>
          <Calender/> 
          <Companies/>     
        </Col>
      </Row>
    </Container>
        
    </div>
  )
}

export default Problems;
