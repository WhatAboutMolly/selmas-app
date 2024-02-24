import { configureStore } from "@reduxjs/toolkit";
import comptableReducer from "../features/comptable/comptableSlice";

export const store = configureStore({
  reducer: {
    comptable: comptableReducer,
  },
});
