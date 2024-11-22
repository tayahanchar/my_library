import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createBook } from "./components/Form";
import { setError } from "./errorSlice";

const initialState = [];

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const result = await fetch(url);
      const randomBook = await result.json();
      return randomBook;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      return [
        ...state,
        createBook(action.payload.title, action.payload.author, "api"),
      ];
    });
  },
});

export const { addBook, deleteBook, addToFavorites } = booksReducer.actions;

export const selectBook = (state) => state.booksReducer;

export default booksReducer.reducer;
