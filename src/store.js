import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books-reducer/reducer";
import filterReducer from "./filterReducer";

export const store = configureStore({
  reducer: { booksReducer, filterReducer },
});
