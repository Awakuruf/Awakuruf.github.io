import React, { useState, useEffect } from "react";
import axios from "axios";
import VolunteerCard from "../Components/VolunteerCard.jsx";
import Spinner from "../Components/Spinner"; 
import "./Work.css";

const Volunteer = () => {
    const [cardsData, setCardsData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://personal-portfolio-backend-dusky.vercel.app/api/volunteer");
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
            <h1> Volunteer Experience </h1>
            {loading ? ( 
                <Spinner /> 
            ) : (
                cardsData.map((card, index) => (
                    <VolunteerCard className="card" key={index} data={card} />
                ))
            )}
        </div>
    );
};

export default Volunteer;
