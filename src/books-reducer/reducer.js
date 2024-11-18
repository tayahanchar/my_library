import * as actionTypes from "./actionTypes";

const initialValue = [];

function booksReducer(state = initialValue, action) {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.payload];
    case actionTypes.DELETE_BOOK:
      return state.filter((book) => action.payload !== book.id);
    case actionTypes.ADD_TO_FAVORITES:
      return state.map((book) => {
        if (action.payload === book.id)
          return { ...book, isFavorite: !book.isFavorite };
        return book;
      });
    default:
      return state;
  }
}

export default booksReducer;
