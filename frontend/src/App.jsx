import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Footer from '../components/Footer';
import ProblemList from '../components/ProblemList'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
<<<<<<< HEAD
=======
// import ProblemPage from '../components/ProblemPage';
>>>>>>> b6e386456baecef7aa8fd920cd73a79c0c0be5c0
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Problems from '../pages/Problems';
import Discuss from '../pages/Discuss';

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={authUser ? <ProblemList /> : <Navigate to={"/login"} />} />
          <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/problemset" element={<Problems/>} />
          <Route path="/discuss" element={<Discuss/>} />
        </Routes>
        <Footer />
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
