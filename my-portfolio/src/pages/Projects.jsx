import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <strong className="text-sm text-gray-500">Technologies used:</strong>
      <p className="text-sm">{technologies.join(', ')}</p>
    </div>
    <a href={link} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of your first project.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description of your second project.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#"
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;