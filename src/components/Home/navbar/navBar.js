import React from 'react';
import Images from './images.jpeg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src='https://www.intagleo.com/wp-content/uploads/2022/08/logo.svg' alt="INTAGLEO Systems" />
      </div>
     
      <ul className="nav-links">
        <li><button className="dropbtn">Home</button></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Services</button>
            <div className="dropdown-content">
              <a href="/service1">Service 1</a>
              <a href="/service2">Service 2</a>
              <a href="/service3">Service 3</a>
            </div>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <button className="dropbtn">Domains of Expertise</button>
            <div className="dropdown-content">
              <a href="/domain1">Domain 1</a>
              <a href="/domain2">Domain 2</a>
              <a href="/domain3">Domain 3</a>
            </div>
          </div>
        </li>
        <li><button className="dropbtn">Our products</button></li>
        <li><button className="dropbtn">Resources</button></li>
        <li><button className="dropbtn">Join us</button></li>
        <li><button className="contact-btn">Get In Touch</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
