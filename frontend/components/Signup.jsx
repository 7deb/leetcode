import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" p-6 rounded-lg shadow-md bg-blue-400 bg-clip-padding w-96">
        <h1 className="text-3xl font-semibold text-center text-green-700 mb-4">
          Sign Up
        </h1>
        <form>
          <div className="mb-4">
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Your username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="mb-4">
            <label className="label p-2">
              <span className="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your email"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block mb-4">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              <span className="loading loading-spinner"></span> 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
