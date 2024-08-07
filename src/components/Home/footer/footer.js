import React from 'react';
import './footer.css';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="newsletter-container">
      <div className="subscribe-section">
        <FaEnvelope className="subscribe-icon" />
        <h2>Subscribe to our Newsletter</h2>
        <div className="email-input">
          <input type="email" placeholder="Email" />
          <button type="button">
            <FaEnvelope className="send-icon" />
          </button>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-info">
          <h4>United States</h4>
          <p>2670 S White Road Suite #125,<br />San Jose, CA 95148<br />+1 408 469 4384</p>
        </div>
        <div className="contact-info">
          <h4>United Kingdom</h4>
          <p>268 Bath Road, Slough SL1 4DX<br />+44 20 8123 8991</p>
        </div>
        <div className="contact-info">
          <h4>United Arab Emirates</h4>
          <p>IFZA Business Park, DDP<br />+971 050 4369055</p>
        </div>
        <button className="contact-button">Contact Us ➔</button>
      </div>
      <div className="footer-section">
      <div className="social-icons">
      <a href="https://www.facebook.com/intagleo/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/company/intagleo-systems/mycompany/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="social-icon" />
      </a>
      <a href="https://www.instagram.com/intagleosystems/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
      </a>
    </div>
        <p>&copy;2024 Intagleo Systems</p>
        <p>Our Cookie Policy | Our Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
