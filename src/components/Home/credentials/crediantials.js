import React from 'react';
import './credential.css';
import Credentialimg from './credentialimg.png'; // Adjust the path according to your file structure

const Credential = () => {
  return (
    <div className="Our_credentail">
        <div className="client_reviews">
        <h1 className="client">
          Our <bold style={{ color: '#5485e7' }}> Credentials</bold>
        </h1>
      </div>
    <div className="company-info-container">
      <div className="left-section">
        <img src={Credentialimg } alt="Building" className="background-image" />
      </div>
      <div className="right-section">
        <div className="stats">
          <div className="stat">
            <h1>20</h1>
            <p>Years</p>
          </div>
          <div className="stat">
            <h1>100+</h1>
            <p>Clients</p>
          </div>
          <div className="stat">
            <h1>500+</h1>
            <p>Projects</p>
          </div>
        </div>
        <div className="description">
          <p>Established in 2004, Intagleo Systems is a Professional Services firm with 20 years experience as an offshore software development outsourcing provider. With a team of 200+ specialized resources and an official presence in the US, UK, UAE, and Asia, Intagleo services an impressive list of global clientele.</p>
          <p>Intagleo Systems has vast expertise in digital transformations and has developed 360-degree software solutions for a broad spectrum of business sectors. With our broad spectrum of technical expertise across all top technology stacks, we help deliver not only innovative custom digital solutions but also maintain strong client relations. We believe you can only be successful in the latter if you are successful in the former.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Credential;
