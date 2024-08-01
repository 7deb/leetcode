
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Email</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Your email"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <Link
//             className="text-sm hover:underline mt-2 inline-block"
//             to="/signup"
//           >
//             Don't have an account?
//           </Link>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700">
//               <span className="loading "></span> 
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { Container, Form, Button, Image } from 'react-bootstrap';
import { FaEye, FaGoogle, FaGithub, FaFacebook, FaEllipsisH } from 'react-icons/fa';
import '../styles/Login.css';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <div className="sign-in-section">
        <div className="placeholder-top"></div>
        <div className="placeholder-bottom">
          <div className="sign-in-box">
            <div className="sign-in-container">
              <div className="container">
                <div className='leetcode-login-header'>
                  <Image alt="LeetCode" src="../images/LClogo-h4.svg" className="logo mb-4"/>
                </div>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Control type="text" placeholder="Username or E-mail" autoComplete="username"  className='mb-4'/>
                  </Form.Group>
                  <Form.Group controlId="formPassword" className="position-relative">
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" autoComplete="current-password" className='mb-4'/>
                    <Button variant="link" onClick={togglePasswordVisibility} className="position-absolute top-50 end-0 translate-middle-y">
                      <FaEye />
                    </Button>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100 mb-3" id='sign-in'>Sign In</Button>
                </Form>
                <div className="d-flex justify-content-between a-and-span">
                  <a href="/accounts/password/reset/">Forgot Password?</a>
                  <span>Sign Up</span>
                </div>
                <div className="my-4 text-center">
                  <p>or you can sign in with</p>
                  <div className="d-flex justify-content-around">
                    <a href="https://leetcode.com/accounts/google/login/?next=%2F"><FaGoogle /></a>
                    <a href="https://leetcode.com/accounts/github/login/?next=%2F"><FaGithub /></a>
                    <a href="https://leetcode.com/accounts/facebook/login/?next=%2F"><FaFacebook /></a>
                    <FaEllipsisH />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
