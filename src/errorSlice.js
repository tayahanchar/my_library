import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      return action.payload;
    },
    cleareError: () => {
      return initialState;
    },
  },
});

export const { setError, cleareError } = errorSlice.actions;
export default errorSlice.reducer;
export const selectErrorMessage = (state) => state.error;
