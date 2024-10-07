import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addBook, editBook } from "@/action";

export const MainHook = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);
  const [selectedBook, setSelectedBook] = useState(null);
  const [activeComponent, setActiveComponent] = useState("listing");

  const handleMenuClick = (key) => {
    setActiveComponent(key);
    setSelectedBook(null);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setActiveComponent("detail");
  };

  const handleAddBook = (newBook) => {
    dispatch(addBook({ ...newBook, id: Date.now(), borrowed: false }));
    setActiveComponent("listing");
  };

  const handleEditBook = (editedBook) => {
    dispatch(editBook(editedBook));
    setActiveComponent("listing");
  };

  const handleBorrowReturn = (bookId) => {
    const bookToToggle = books.find((book) => book.id === bookId);
    if (bookToToggle) {
      const updatedBook = { ...bookToToggle, borrowed: !bookToToggle.borrowed };
      dispatch(editBook(updatedBook));
    }
  };

  return {
    selectedBook,
    activeComponent,
    handleMenuClick,
    handleBookSelect,
    handleAddBook,
    handleEditBook,
    setActiveComponent,
    handleBorrowReturn,
    books,
  };
};
