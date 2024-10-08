export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const BORROW_RETURN_BOOK = "BORROW_RETURN_BOOK";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const editBook = (book) => ({
  type: EDIT_BOOK,
  payload: book,
});

export const borrowReturnBook = (bookId) => ({
  type: BORROW_RETURN_BOOK,
  payload: bookId,
});
