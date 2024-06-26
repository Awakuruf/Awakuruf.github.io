// src/reducers/pageReducer.js
const initialState = {
    cardsData: [],
    loading: false,
    error: null,
  };
  
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_DATA_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "FETCH_DATA_SUCCESS":
        return {
          ...state,
          loading: false,
          cardsData: action.payload,
        };
      case "FETCH_DATA_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default pageReducer;
  