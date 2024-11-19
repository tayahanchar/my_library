import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksReducer";
import filterReducer from "./filterReducer";

export const store = configureStore({
  reducer: { booksReducer, filterReducer },
});
