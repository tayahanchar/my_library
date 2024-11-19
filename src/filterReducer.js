import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
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
    resetFilters: () => {
      return initialState;
    },
    setOnlyFavoritesFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  setOnlyFavoritesFilter,
} = filterReducer.actions;

export const selectTitle = (state) => state.filterReducer.title;
export const selectAuthor = (state) => state.filterReducer.author;
export const selectFavorites = (state) => state.filterReducer.onlyFavorite;

export default filterReducer.reducer;
