import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksReducer";
import filterReducer from "./filterReducer";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: { booksReducer, filterReducer, errorSlice },
});
