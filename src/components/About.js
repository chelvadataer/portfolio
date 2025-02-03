// src/components/About.js
import React from 'react';
import profilePic from '../assets/images/profile.jpg';

function About() {
    return (
        <section className="about">
            <h2>About Me</h2>
            <img src={profilePic} alt="Profile" />
            <p>
                I'm a data scientist with extensive experience in machine learning, data analytics, and predictive modeling. I enjoy turning complex data into actionable insights.
            </p>
        </section>
    );
}

export default About;
