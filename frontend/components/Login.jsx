import React, { useState } from "react";
import useLogin from "../hooks/useLogin";
import { Container, Form, Button, Image } from 'react-bootstrap';
import { FaEye, FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import '../styles/Login.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loading, login } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages
    try {
      await login({ emailOrUsername: username, password });
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="sign-in-section p-4 rounded shadow">
        <div className='leetcode-login-header text-center mb-4'>
          <Image alt="LeetCode" src="../images/LClogo-h4.svg" className="logo" />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Control
              type="text"
              placeholder="Username or E-mail"
              autoComplete="username"
              className='mb-4'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="position-relative">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              autoComplete="current-password"
              className='mb-4'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <Button
              variant="link"
              onClick={togglePasswordVisibility}
              className="position-absolute top-50 end-0 translate-middle-y"
              aria-label="Toggle Password Visibility"
            >
              <FaEye />
            </Button>
          </Form.Group>
          {error && <div className="text-danger mb-3">{error}</div>}
          <Button
            variant="primary"
            type="submit"
            className="w-100 mb-3"
            id='sign-in'
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </Form>
        <div className="d-flex justify-content-between a-and-span">
          <a href="/accounts/password/reset/">Forgot Password?</a>
          <a href="/signup">Sign Up</a>
        </div>
        <div className="my-4 text-center other-login-options-prime">
          <p>or you can sign in with</p>
          <center>
            <div className="d-flex other-login-options justify-content-around">
              <a href="https://leetcode.com/accounts/google/login/?next=%2F" className='google' aria-label="Sign in with Google"><FaGoogle /></a>
              <a href="https://leetcode.com/accounts/github/login/?next=%2F" className='github' aria-label="Sign in with GitHub"><FaGithub /></a>
              <a href="https://leetcode.com/accounts/facebook/login/?next=%2F" className='facebook' aria-label="Sign in with Facebook"><FaFacebook /></a>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
