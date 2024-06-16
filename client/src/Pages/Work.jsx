import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Components/WorkCard.jsx"; 
import "./Work.css";
import Spinner from "../Components/Spinner"; // Assuming you have a Spinner component

const Work = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://personal-portfolio-backend-dusky.vercel.app/api/work");
                // const response = await axios.get(`${config}work`);
                const sortedData = response.data.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
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
            <h1> Work Experience </h1>
            {loading ? ( 
                <Spinner /> 
            ) : (
                cardsData.map((card, index) => (
                    <Card className="card" key={index} data={card} />
                ))
            )}
        </div>
    );
};

export default Work;
