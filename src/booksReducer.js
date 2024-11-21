import { createSlice } from "@reduxjs/toolkit";
import { createBook } from "./components/Form";

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

export const thunkFunction = async (dispatch, getState) => {
  try {
    const result = await fetch("http://localhost:4000/random-book");
    const randomBook = await result.json();
    if (randomBook.title && randomBook.author)
      dispatch(addBook(createBook(randomBook.title, randomBook.author, "api")));
  } catch (error) {
    console.log(error);
  }
};

export const { addBook, deleteBook, addToFavorites } = booksReducer.actions;

export const selectBook = (state) => state.booksReducer;

export default booksReducer.reducer;
