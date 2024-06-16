// src/Components/Spinner.jsx
import React from "react";
import "./Spinner.css"; // Create a CSS file for styling the spinner

const Spinner = () => {
    return (
        <div className="spinner-container">
            <p className="loading-text">Loading...</p> {/* Add the loading text */}
            <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div>
    );
};

export default Spinner;
