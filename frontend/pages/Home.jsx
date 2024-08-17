import React from 'react'
import '../styles/Home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button,Image } from 'react-bootstrap';

  const companies = [
    { name: 'Facebook', src: 'https://leetcode.com/static/images/landing_page/facebook.svg' },
    { name: 'Leap Motion', src: 'https://leetcode.com/static/images/landing_page/leap-motion.svg' },
    { name: 'Apple', src: 'https://leetcode.com/static/images/landing_page/apple.svg' },
    { name: 'Uber', src: 'https://leetcode.com/static/images/landing_page/uber.svg' },
    { name: 'Squarespace', src: 'https://leetcode.com/static/images/landing_page/squarespace.svg' },
    { name: 'Jet', src: 'https://leetcode.com/static/images/landing_page/jet.svg' },
    { name: 'Intel', src: 'https://leetcode.com/static/images/landing_page/intel.svg' },
    { name: 'Amazon', src: 'https://leetcode.com/static/images/landing_page/amazon.svg' },
    { name: 'Bank of America', src: 'https://leetcode.com/static/images/landing_page/bank-of-america.svg' },
    { name: 'Pinterest', src: 'https://leetcode.com/static/images/landing_page/pinterest.svg' },
    { name: 'Cisco', src: 'https://leetcode.com/static/images/landing_page/cisco.svg' },
    { name: 'Stripe', src: 'https://leetcode.com/static/images/landing_page/stripe.svg' },
  ];

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
            <Button variant="success" className="hero-button" href='/signup'>Create Account</Button>
          </div>
        </Col>
      </Row>
      <Row className="explore-section">
        <Col md={6}>
          <h2 className="explore-title">Start Exploring            <img src="../images/startExploring.png" width={50}/></h2>
          <p className="explore-subtitle">
            Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.
          </p>
          <a href='/explore' className='explore-button'>Get Started</a>
        </Col>
        <Col md={6} className="explore-images-container cards">
          <img src="../images/c3.png" alt="" className="explore-image cards-1"/>
          <img src="../images/c2.png" alt="" className="explore-image cards-2"/>
          <img src="../images/c1.png" alt="" className="explore-image cards-3"/>  
        </Col>
      </Row>
      <Row className="qc4-section">
        <Col md={6} className='qc4-section-inner' style={{borderRight:"3px solid white"}}>
          <img src="../images/qcc.png" height={50}/>
          <br /><br />
          <h2 className="qc4-title" style={{color:"#259AF3"}}>Questions, Community & Contests</h2>
          <p className="qc4-subtitle">
          Over 3450 questions for you to practice. Come and join one of the largest tech communities with hundreds of thousands of active users and participate in our contests to challenge yourself and earn rewards.
          </p>
          <a href='/problemset' className='qc4-button'>View Questions</a>
        </Col>
        <Col md={6} className='qc4-section-inner'>
        <img src="../images/cc.png" height={50}/>
          <br /><br />
        <h2 className="qc4-title" style={{color:"#B98C31"}}>Companies & Candidates</h2>
          <p className="qc4-subtitle">
          Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical talent. From sponsoring contests to providing online assessments and training, we offer numerous services to businesses.
          </p>
          <a href='/discuss' className='qc4-button'>Business Opportunities</a>  
        </Col>
      </Row>
      <Row className="devmade-section text-center">
        <Col className='devmade-section-inner'>
          <img src="../images/developer.png" height={50}/>
          <br /><br />
          <h2 className="devmade-title" >Developer</h2>
          <p className="devmade-subtitle">
          We now support 14 popular coding languages. At our core, LeetCode is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.
          </p>
          </Col>
      </Row>
      <Row className="devmade-section text-center" style={{backgroundColor:"#FEFEFF"}}>
        <Col className='devmade-section-inner'>
          <img src="../images/madewith.png" height={50}/>
          <br /><br />
          <h2 className="devmade-title" style={{color:"#C93232"}}>Made with <i class="fa fa-heart" aria-hidden="true"></i> in SF</h2>
          <p className="devmade-subtitle">
          At LeetCode, our mission is to help you improve yourself and land your dream job. We have a sizable repository of interview resources for many companies. In the past few years, our users have landed jobs at top companies around the world.
          </p>
          </Col>
      </Row>
      <Row className="logo-section text-center" style={{backgroundColor:"#FEFEFF"}}>
        <Col className='logo-section-inner'>
        <Container fluid>
      <Row className="companies-showcase-base justify-content-center">
        {companies.map((company, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index} className="text-center">
            <div className="logo">
              <Image
                className={`company-logo ${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                src={company.src}
                alt={company.name}
                title={company.name}
                fluid
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>          
          </Col>
      </Row>
      <Row className="devmade-section text-center" style={{backgroundColor:"#FEFEFF"}}>
        <Col className='devmade-section-inner'>
          <p className="devmade-subtitle">
          If you are passionate about tackling some of the most interesting problems around, we would love to hear from you.
          </p>
          <a href='' className='devmade-button'>Join Our Team</a>
          </Col>
      </Row>
    </Container>
</div>
  )
}

export default Home