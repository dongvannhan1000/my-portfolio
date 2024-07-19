import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/path-to-your-image.jpg" alt="Your Name" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <p className="text-lg mb-4">
            Hi, I'm [Your Name]. I'm a passionate Front-End Developer with experience in 
            React, JavaScript, and modern web technologies.
          </p>
          <p className="text-lg mb-4">
            I love creating responsive and user-friendly web applications that solve real-world problems.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Skills</h2>
          <ul className="list-disc list-inside">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;