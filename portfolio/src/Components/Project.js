import React, { useState, useEffect } from "react";
import { projects as localProjects } from "../index";

const Projects = () => {
  const [projects, setProjects] = useState(localProjects || []);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
        const response = await fetch(`${apiUrl}/projects`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects__container" id="projects">
      <h2 className="projects__title">Projects</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="projects">
        {loading ? <p>Loading...</p> : projects.map((project, id) => (
          <div className="project-container" key={id}>
            {project.image && <img src={project.image} className="project-img" alt={project.title} />}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.skills && (
              <ul className="projects-skills">
                {project.skills.map((skill, skillId) => (
                  <li className="project-skill" key={skillId}>{skill}</li>
                ))}
              </ul>
            )}
            <div className="project-links">
              {project.link && <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View</a>}
              {project.demo && <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">Demo</a>}
              {project.source && <a href={project.source} className="project-link" target="_blank" rel="noopener noreferrer">Source</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
