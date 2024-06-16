import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "../Components/ProjectCard";
import Spinner from "../Components/Spinner"; // Import the Spinner component
import "./Projects.css";

const Projects = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://personal-portfolio-backend-dusky.vercel.app/api/projects");
                const sortedData = response.data.sort(
                    (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
                );
                setCardsData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchData();
    }, []);

    return (
        <div className="card-container">
            <h1> Projects </h1>
            {loading ? ( 
                <Spinner /> 
            ) : (
                <div className="project-cards-container">
                    {cardsData.map((project) => (
                        <ProjectCard key={project._id["$oid"]} project={project} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
