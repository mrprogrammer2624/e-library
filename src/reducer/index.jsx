import { ADD_BOOK, BORROW_RETURN_BOOK, EDIT_BOOK } from "@/action";

const initialBooks = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publicationDate: "1960-07-11",
    borrowed: false,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Science Fiction",
    publicationDate: "1949-06-08",
    borrowed: true,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    publicationDate: "1813-01-28",
    borrowed: false,
  },
];

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case EDIT_BOOK:
      return state.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
    case BORROW_RETURN_BOOK:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, borrowed: !book.borrowed }
          : book
      );
    default:
      return state;
  }
};

export default bookReducer;
