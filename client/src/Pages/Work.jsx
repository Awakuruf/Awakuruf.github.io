import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../actions/pageActions";
import Card from "../Components/WorkCard.jsx"; 
import "./Work.css";
import Spinner from "../Components/Spinner";

const Work = () => {
  const dispatch = useDispatch();
  const { cardsData, loading, error } = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(fetchData("https://personal-portfolio-backend-dusky.vercel.app/api/work"));
  }, [dispatch]);

  return (
    <div className="card-container">
      <h1>Work Experience</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        cardsData.map((card, index) => (
          <Card className="card" key={index} data={card} />
        ))
      )}
    </div>
  );
};

export default Work;
