// Media.js
import React from "react";
import "./Media.css";
import "./WorkCard.css";
import { FaLinkedin } from "react-icons/fa";

const Media = ({ media, source }) => {
    const redirectToLinkedInPost = () => {
        window.open(media, '_blank');
    };

    return (
        <div className="media" onClick={redirectToLinkedInPost}>
            {source === "Volunteer" ? (
                <span style={{ color: 'white' }}>View Media!</span>
            ) : (
                <>
                    <FaLinkedin className="linkedin-icon" />
                    <span>View media!</span>
                </>
            )}
        </div>
    );
};

export default Media;
