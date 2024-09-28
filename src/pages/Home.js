import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Make sure you have a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome message */}
      <h1>Welcome to My Portfolio</h1>
      <p className="welcome-message">
        Hi, I'm Umang Sehrawat, a passionate software developer with a keen interest in web application development.
      </p>

      {/* Mission Statement */}
      <section className="mission-statement">
        <h2>My Mission</h2>
        <p>
          My mission is to leverage my skills to create innovative and efficient software solutions that add value and
          improve the lives of others. I am dedicated to continuous learning and improving my craft to make a positive
          impact in the world of technology.
        </p>
      </section>

      {/* Link/Button to redirect to other pages */}
      <div className="home-buttons">
        <Link to="/about" className="btn">Learn More About Me</Link>
        <Link to="/projects" className="btn">View My Projects</Link>
      </div>
    </div>
  );
};

export default Home;