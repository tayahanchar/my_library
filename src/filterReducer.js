import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};

const filterReducer = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      return { ...state, title: action.payload };
    },
    setAuthorFilter: (state, action) => {
      return { ...state, author: action.payload };
    },
  },
});

export const { setTitleFilter, setAuthorFilter } = filterReducer.actions;
export const selectTitle = (state) => state.filterReducer.title;
export const selectAuthor = (state) => state.filterReducer.author;

export default filterReducer.reducer;
