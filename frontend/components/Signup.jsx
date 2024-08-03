import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Image, InputGroup } from 'react-bootstrap';
import { FaEye, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import '../styles/Signup.css';
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errors, setErrors] = useState({});

  const { loading, errors: signupErrors, signup } = useSignup();

  useEffect(() => {
    if (signupErrors) {
      setErrors(signupErrors);
    }
  }, [signupErrors]);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(await signup({ username, email, password: password1, confirmPassword: password2 })){
      console.log("Form submitted");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="sign-up-section">
        <div className="leetcode-signup-header">
          <Image alt="LeetCode" src="../images/LClogo-h4.svg" className="logo mb-4" />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Control 
              type="text" 
              placeholder="Username" 
              autoComplete="username" 
              className="mb-2" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </Form.Group>
          <Form.Group controlId="formPassword1" className="position-relative">
            <InputGroup>
              <Form.Control 
                type={showPassword1 ? "text" : "password"} 
                placeholder="Password" 
                autoComplete="new-password" 
                className="mb-2" 
                value={password1}
                onChange={(e) => setPassword1(e.target.value)} 
              />
              <Button variant="link" onClick={togglePasswordVisibility1} className="position-absolute top-50 end-0 translate-middle-y">
                <FaEye />
              </Button>
            </InputGroup>
            {errors.password && <p className="error-message">{errors.password}</p>}
          </Form.Group>
          <Form.Group controlId="formPassword2" className="position-relative">
            <InputGroup>
              <Form.Control 
                type={showPassword2 ? "text" : "password"} 
                placeholder="Confirm Password" 
                autoComplete="new-password" 
                className="mb-2" 
                value={password2}
                onChange={(e) => setPassword2(e.target.value)} 
              />
              <Button variant="link" onClick={togglePasswordVisibility2} className="position-absolute top-50 end-0 translate-middle-y">
                <FaEye />
              </Button>
            </InputGroup>
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Control 
              type="email" 
              placeholder="E-mail address" 
              autoComplete="email" 
              className="mb-2" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mb-3" id="sign-up" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Button>
          {errors.server && <p className="error-message">{errors.server}</p>}
        </Form>
        <div className="d-flex justify-content-between sign-in-link">
          <p>Have an account?</p>
          <a href="/login">Login </a>
        </div>
        <div className="my-4 text-center other-login-options-prime">
          <p>or you can sign in with</p>
          <center>
            <div className="d-flex justify-content-center other-login-options">
              <a href="https://leetcode.com/accounts/google/login/?next=%2F" className="google"><FaGoogle /></a>
              <a href="https://leetcode.com/accounts/github/login/?next=%2F" className="github"><FaGithub /></a>
              <a href="https://leetcode.com/accounts/facebook/login/?next=%2F" className="facebook"><FaFacebook /></a>
            </div>
          </center>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
