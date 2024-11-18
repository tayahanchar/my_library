import * as actionTypes from "./actionTypes";

export function addBook(book) {
  return {
    type: actionTypes.ADD_BOOK,
    payload: book,
  };
}

export function deleteBook(id) {
  return {
    type: actionTypes.DELETE_BOOK,
    payload: id,
  };
}
