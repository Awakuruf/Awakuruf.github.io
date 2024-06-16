import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pageReducer";

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store; 