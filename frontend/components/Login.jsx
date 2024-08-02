import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Container, Form, Button, Image } from 'react-bootstrap';
import { FaEye, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import '../styles/Login.css';

const LoginPage = () => {
        const [showPassword, setShowPassword] = useState(false);
      
        const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        }; 
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
    
        const { loading, login } = useLogin();
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            await login(username, password);
        };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="sign-in-section">              
                <div className='leetcode-login-header'>
                  <Image alt="LeetCode" src="../images/LClogo-h4.svg" className="logo mb-4"/>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername">
                    <Form.Control type="text" placeholder="Username or E-mail" autoComplete="username"  className='mb-4' value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="position-relative">
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" autoComplete="current-password" className='mb-4' value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    <Button variant="link" onClick={togglePasswordVisibility} className="position-absolute top-50 end-0 translate-middle-y">
                      <FaEye />
                    </Button>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 mb-3" id='sign-in'>Sign In</Button>
                </Form>
                <div className="d-flex justify-content-between a-and-span">
                  <a href="/accounts/password/reset/">Forgot Password?</a>
                  <a href="/signup">Sign Up</a>
                </div>
                <div className="my-4 text-center other-login-options-prime">
                  <p>or you can sign in with</p>
                  <center>
                    <div className="d-flex other-login-options">
                      <a href="https://leetcode.com/accounts/google/login/?next=%2F" className='google'><FaGoogle /></a>
                      <a href="https://leetcode.com/accounts/github/login/?next=%2F" className='github'><FaGithub /></a>
                      <a href="https://leetcode.com/accounts/facebook/login/?next=%2F" className='facebook'><FaFacebook /></a>
                    </div>
                  </center>
                </div>
              </div>
            </div>          
  );
};

export default LoginPage;
