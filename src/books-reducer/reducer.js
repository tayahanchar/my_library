import * as actionTypes from "./actionTypes";

const initialValue = [];

function booksReducer(state = initialValue, action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => action.payload !== book.id);
    default:
      return state;
  }
}

export default booksReducer;
