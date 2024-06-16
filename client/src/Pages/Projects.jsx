// src/Projects.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions/pageActions";
import ProjectCard from "../Components/ProjectCard";
import Spinner from "../Components/Spinner";
import "./Projects.css";

const Projects = () => {
  const dispatch = useDispatch();
  const { cardsData, loading, error } = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(fetchData("https://personal-portfolio-backend-dusky.vercel.app/api/projects"));
  }, [dispatch]);

  return (
    <div className="card-container">
      <h1>Projects</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="project-cards-container">
          {cardsData.map((project, index) => (
            <ProjectCard key={`${project.projectName}-${project.startDate}-${index}`} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
