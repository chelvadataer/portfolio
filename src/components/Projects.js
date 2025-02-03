// src/components/Projects.js
import React from 'react';

function Projects() {
    // Sample project data
    const projectData = [
        {
            title: 'Customer Churn Prediction',
            description: 'A machine learning model to predict customer churn for a telecom company.',
            technologies: ['Python', 'scikit-learn', 'Pandas'],
            link: 'https://github.com/username/churn-prediction'
        },
        {
            title: 'Sales Analytics Dashboard',
            description: 'An interactive dashboard for visualizing sales data and trends.',
            technologies: ['React', 'D3.js', 'Node.js'],
            link: 'https://github.com/username/sales-dashboard'
        }
    ];

    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div className="project" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>
                            <strong>Technologies:</strong> {project.technologies.join(', ')}
                        </p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
