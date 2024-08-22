import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Footer from '../components/Footer';
import ProblemList from '../components/ProblemList'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Problems from '../pages/Problems';
import Discuss from '../pages/Discuss';
import E404 from '../components/E404';
import CodeEditor from '../components/CodeEditor';

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={authUser ? <Problems /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/problemset" element={<Problems/>} />
          <Route path="/discuss" element={<Discuss/>} />
          <Route path="/problems/:id" element={<CodeEditor/>} />
          <Route path="*" element={<E404/>} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
