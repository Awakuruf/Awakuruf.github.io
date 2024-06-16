// src/actions/pageActions.js
import axios from "axios";

export const fetchData = (url) => async (dispatch) => {
  dispatch({ type: "FETCH_DATA_REQUEST" });

  try {
    const response = await axios.get(url);
    const sortedData = response.data.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: sortedData });
  } catch (error) {
    dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
  }
};
