import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions/pageActions";
import VolunteerCard from "../Components/VolunteerCard.jsx";
import Spinner from "../Components/Spinner";
import "./Work.css";

const Volunteer = () => {
  const dispatch = useDispatch();
  const { cardsData, loading, error } = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(
      fetchData(
        "https://personal-portfolio-backend-dusky.vercel.app/api/volunteer"
      )
    );
  }, [dispatch]);

  return (
    <div className="card-container">
      <h1>Volunteer Experience</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        cardsData.map((card, index) => (
          <VolunteerCard className="card" key={index} data={card} />
        ))
      )}
    </div>
  );
};

export default Volunteer;
