import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>
      <p>{details.discription}</p>
      <div className="view-project-btn-container">
        <a href={details.projectUrl}>
          <button className="view-project-btn" onClick={() => {}}>
            View Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
