import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/WorkCard.jsx"; 
import "./Work.css";
import config from '../config.js';

const Work = () => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${config.apiBaseUrl}/work`);
                const sortedData = response.data.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
                setCardsData(sortedData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="card-container">
            <h1> Work Experience </h1>
            {cardsData.map((card, index) => (
                <Card className="card" key={index} data={card} />
            ))}
        </div>
    );
};

export default Work;
