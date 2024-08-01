import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Footer from '../components/Footer';
import Problems from '../pages/Problems';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/problemset" element={<Problems />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
