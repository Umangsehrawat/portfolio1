import React from 'react';
import myPhoto from '../assets/myphoto.jpeg'; 
import resumePDF from '../assets/Umang_Sehrawat_Resume.pdf'; 
import './AboutMe.css';
const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>

      <div className="profile-image-container">
        <img src={myPhoto} alt="Umang Sehrawat" className="profile-image" />
      </div>

      <div className="about-me-text">
        <p>Hello, my name is Umang Sehrawat. I am a dedicated and passionate software developer with a strong interest in web application development. I believe in continuous learning and aim to enhance my skills to create innovative and efficient software solutions.</p>
      </div>

      <div className="resume-link-container">
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">
          Download My Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;