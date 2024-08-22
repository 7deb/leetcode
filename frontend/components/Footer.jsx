import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-left">
          <span>Copyright © 2024 LeetCode</span>
        </div>
        <div className="footer-center">
          <a href="/support/">Help Center</a>
          <a href="/jobs/">Jobs</a>
          <a href="/bugbounty/">Bug Bounty</a>
          <a href="/interview/">Assessment</a>
          <a href="/student/">Students</a>
          <a href="/terms/">Terms</a>
          <a href="/privacy/">Privacy Policy</a>
        </div>
        <div className="footer-right">
          <a href="/region/">
            <img src="https://leetcode.com/_next/static/images/us-4787d154ddfcd171038dd5c1c98f7f07.svg" alt="United States" height={20} width={20}/>
            <span>United States</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
      );
    };
    
export default Footer;
