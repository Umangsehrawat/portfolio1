import React from 'react';
import './Projects.css'; // Import CSS file for styling

// Import your project images
import photo from '../assets/photo.png';
import hobyy from '../assets/hobby.png';
import form from '../assets/form.png';

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      
      <div className="project-container">
        {/* Project 1 */}
        <div className="project-card">
          <img src={photo} alt="Project 1" className="project-image" />
          <div className="project-info">
            <h2>Project 1: Real Estate Agent Website</h2>
            <p>
            Description:
            I developed a responsive and user-friendly website for a real estate agent to showcase their property listings and services. The website includes features such as a property search functionality, detailed property pages with image galleries, and contact forms for potential buyers. I implemented a clean and modern design to ensure easy navigation and an engaging user experience.

           My Role:

           Designed and developed the website using HTML, CSS, and JavaScript to create an interactive and responsive layout.
           Integrated features such as property search, filtering options, and contact forms using React for a seamless user experience.
           Worked closely with the real estate agent to ensure the website met their branding and business requirements.
          
           Outcome:
           The website effectively increased the agent's online presence, making it easier for potential clients to browse available properties and reach out for inquiries. The agent experienced an uptick in engagement and inquiries through the website's contact forms.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={hobyy} alt="Project 2" className="project-image" />
          <div className="project-info">
            <h2>Project 2: Personal Hobbies Website</h2>
            <p>
            Description:
            I developed a personal website that showcased my hobbies and interests. The website featured different sections highlighting my favorite activities, with images and descriptions for each hobby. Additionally, I included links to other assignments and projects I’ve worked on, making it a central hub for showcasing my work and interests.

            My Role:

            Designed and developed the website using HTML, CSS, and JavaScript to create an engaging and interactive layout.
            Created dedicated sections for each hobby with relevant images and descriptions.
            Implemented navigation links to other assignments, making it easy to explore my work.
            Outcome:
            This project allowed me to practice my web development skills while creating a personal platform to display my hobbies and assignments. It also served as a great introduction to organizing and linking multiple web pages.


            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={form} alt="Project 3" className="project-image" />
          <div className="project-info">
            <h2>Project 3: Instructor Evaluation Form for Centennial College</h2>
            <p>
            Description:
            I created an instructor evaluation form for Centennial College, allowing students to provide feedback on their courses and instructors. The form included fields for rating different aspects of the course, as well as a section for additional comments. The form was designed to be intuitive and easy to use, ensuring that students could provide their feedback efficiently.

            My Role:

            Developed the form using HTML, ensuring all required fields were included for a comprehensive evaluation.
            Styled the form using CSS to create a clean and user-friendly layout.
            Implemented validation to ensure accurate data entry.
            Outcome:
            The project helped me understand the importance of user experience in form design and gave me hands-on experience in creating functional, real-world applications for educational purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;