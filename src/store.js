import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books-reducer/reducer";

export const store = configureStore({ reducer: { booksReducer } });
