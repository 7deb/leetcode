import React from 'react';
import {Container} from 'react-bootstrap';
import ExploreCards from '../components/ExploreCards';

import '../styles/Explore.css';

const Explore = () => {

  return (
    <Container className="my-4">
      <h2 className="mb-4">Featured</h2>
      <ExploreCards section="Featured"/>
      <br /><br />
      <h2 className="mb-4">Interview</h2>
      <ExploreCards section="Interview"/>
      <br /><br />
      <h2 className="mb-4">Learn</h2>
      <ExploreCards section="Learn"/>
    </Container>
  );
};

export default Explore;
