import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectCard.css";
import Skill from "./Skill";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05 }}
      onClick={handleToggle}
    >
      <motion.div className="project-image-container">
        <img src={project.image} alt={project.projectName} />
        <h2>{project.projectName}</h2>
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="project-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <p className="timeline">
                🗓️ {project.startDate} - {project.endDate}
              </p>
              <ul className="descriptions-list">
                {project.descriptions.map((desc, index) => (
                  <li key={`desc_${index}`}>{desc}</li>
                ))}
              </ul>
              <div className="skills-container">
                {project.skills.map((skill, index) => (
                  <Skill key={index} skill={skill[0]} icon={skill[1]} />
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <Button
                  variant="contained"
                  startIcon={<GitHubIcon />}
                  sx={{
                    backgroundColor: "#24292e",
                    color: "#ffffff",
                    textTransform: "none",
                    padding: "6px 16px",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "6px",
                    transition: "background-color 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#2c3338",
                    },
                  }}
                >
                  GitHub
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
