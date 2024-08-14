import React from 'react'
import ExploreCardsDS from '../DS/ExploreCardsDS';
import { Card, Button } from 'react-bootstrap';
import { PlayCircle, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

   

const ExploreCards = ({section}) => {
    const scrollContainerRef = React.useRef(null);
  
    const scrollLeft = () => {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

  return (
    <div className="scroll-buttons">
        <Button variant="light" onClick={scrollLeft}>
          <ChevronLeft size={30} />
        </Button>
        <div className="scroll-container" ref={scrollContainerRef}>
          {ExploreCardsDS
            .filter((course) => course.section === section)
            .map((course, index) => (
              <div className="scroll-item" key={index}>
                <Card className="custom-card">
                  <Card.Body className="position-relative">
                    <Card.Text className="cardDesc">
                      {course.description}
                    </Card.Text>
                    <Card.Title className="mb-4 fs-4 fw-bold">
                      {course.title}
                    </Card.Title>
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
                  <PlayCircle
                    size={50}
                    className="position-absolute play-icon"
                  />
                </Card>
              </div>
            ))}
        </div>
        <Button variant="light" onClick={scrollRight}>
          <ChevronRight size={30} />
        </Button>
      </div>
  )
}

export default ExploreCards