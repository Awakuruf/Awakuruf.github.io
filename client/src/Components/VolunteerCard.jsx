// src/Card.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WorkCard.css";
import Skill from "./Skill";
import Media from "./Media";

const VolunteerCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="card-header">
        <div className="header-content">
          <div className="logo-container">
            <img src={data.logo} alt={data.company} className="logo" />
          </div>
          <div className="data-container">
            <h2>{data.company}</h2>
            <p>{data.role}</p>
          </div>
        </div>
        <motion.div
          className="arrow"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.div>
      </div>
      {isOpen && (
        <motion.div
          className="details"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="timeline">
            📍 {data.startDate} {data.endDate ? `- ${data.endDate}` : ""}
          </p>
          <ul className="description-list">
            {data.description.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
          </ul>
          {data.media && <Media media={data.media} source="Volunteer"/>}
        </motion.div>
      )}
    </motion.div>
  );
};

export default VolunteerCard;
