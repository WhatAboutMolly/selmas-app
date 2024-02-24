import { createSlice } from "@reduxjs/toolkit";
import { comptables } from "@/Data/utils";

const initialState = comptables;

export const comptableSlice = createSlice({
  name: "comptable",
  initialState,
  reducers: {},
});

export const {} = comptableSlice.actions;
export default comptableSlice.reducer;
export const selectAllComptable = (state) => state.comptable;
