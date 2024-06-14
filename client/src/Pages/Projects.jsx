import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../Components/ProjectCard";
import "./Projects.css";

const Projects = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/projects");
                const sortedData = response.data.sort(
                    (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
                );
                setCardsData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="card-container">
            <h1> Projects </h1>
            <div className="project-cards-container">
                {cardsData.map((project) => (
                    <ProjectCard key={project._id["$oid"]} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
