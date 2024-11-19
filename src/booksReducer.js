import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksReducer = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      return [...state, action.payload];
    },
    deleteBook: (state, action) => {
      return state.filter((book) => action.payload !== book.id);
    },
    addToFavorites: (state, action) => {
      return state.map((book) => {
        if (action.payload === book.id)
          return { ...book, isFavorite: !book.isFavorite };
        return book;
      });
    },
  },
});

export const { addBook, deleteBook, addToFavorites } = booksReducer.actions;

export const selectBook = (state) => state.booksReducer;

export default booksReducer.reducer;
