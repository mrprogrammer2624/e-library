import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editBook } from "@/action";
import { AddEditBookForm, Container } from "@/components";

export const EditBook = () => {
  const { id } = useParams();
  const books = useSelector((state) => state);
  const dispatch = useDispatch();
  const book = books.find((book) => book.id === parseInt(id));

  const handleSubmit = (updatedBook) => {
    dispatch(editBook(updatedBook));
  };

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <Container>
      <h2>Edit Book</h2>
      <AddEditBookForm book={book} onSubmit={handleSubmit} />
    </Container>
  );
};
