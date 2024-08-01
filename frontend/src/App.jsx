import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Signup from '../components/Signup';
import Login from '../components/Login';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Add a default route */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
