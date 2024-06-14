// Skill.js
import React from "react";
import "./Skill.css";

const Skill = ({ skill, icon }) => {
    return (
        <div className="skill">
            <img src={icon} alt={skill} className="skill-icon" />
            <span className="skill-name">{skill}</span>
        </div>
    );
};

export default Skill;
