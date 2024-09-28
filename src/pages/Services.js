import React from 'react';
import './Services.css'; 

import webdevelopment from '../assets/webdevelopment.avif'; 
import databasemanagement from '../assets/databasemanagement.jpeg'; 
import programming from '../assets/programming.jpeg'; 
const Services = () => {
  return (
    <div className="services-page">
      <h1>My Services</h1>
      
      <div className="service-container">
        <div className="service-card">
          <img src={webdevelopment} alt="Web Development" className="service-image" />
          <h2>Web Development</h2>
          <p>I develop responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and React. I ensure that websites are user-friendly and provide an engaging experience for visitors.</p>
        </div>

        <div className="service-card">
          <img src={databasemanagement} alt="Database Management" className="service-image" />
          <h2>Database Management</h2>
          <p>I offer database management services, including design, implementation, and optimization. I have experience with SQL, Oracle SQL Developer, and other database management systems.</p>
        </div>

        <div className="service-card">
          <img src={programming} alt="General Programming" className="service-image" />
          <h2>General Programming</h2>
          <p>I provide general programming services, including writing code in various languages, developing scripts, and solving complex programming problems to create efficient solutions.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;