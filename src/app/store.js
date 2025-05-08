import { configureStore } from "@reduxjs/toolkit";
import stackReducer from "../features/stackSlice";

export const store = configureStore({
  reducer: {
    stack: stackReducer,
  },
});
