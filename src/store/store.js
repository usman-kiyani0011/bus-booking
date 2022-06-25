import { configureStore } from "@reduxjs/toolkit";
import busReducer from "./busSlice";

export const store = configureStore({
  reducer: {
    buses: busReducer,
  },
});
