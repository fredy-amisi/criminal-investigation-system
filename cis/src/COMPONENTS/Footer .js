import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import '../Css/styling.css'; // Ensure this path is correct

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="dylan">
          <h1 className="Wangilah">Empowering law enforcement with advanced tools for crime investigation.</h1>
        </div>
        <div className="Copyright">
          <p className="Copyright">
            &copy; All Rights Reserved. Designed by Dylan <br /> 0113918190
          </p>
        </div>
        <div className="follow">
          <h1>Follow us</h1>
          <div className="follow-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
        <div className="links">
          <h1>Quick Links</h1>
          <div className="links-div">
            <a href="/Signup"><h3>Get Started</h3></a>
            <a href="/Login"><h3>Log In</h3></a>
            <a href="/CrimeReports"><h3>Report a Crime</h3></a>
            <a href="/Team"><h3>Our Team</h3></a>
            <a href="/Services"><h3>Our Services</h3></a>
            <a href="/Contact"><h3>Contact Us</h3></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
