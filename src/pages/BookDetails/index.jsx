import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BookDetail, Container } from "@/components";
import { borrowReturnBook } from "@/action";

export const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state);
  const book = books.find((book) => book.id === parseInt(id));
  const dispatch = useDispatch();

  const handleBorrowReturn = (bookId) => {
    dispatch(borrowReturnBook(bookId));
  };

  const handleEdit = () => {
    console.log(`Edit book with ID: ${book.id}`);
  };

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <Container>
      <BookDetail
        book={book}
        onBorrowReturn={handleBorrowReturn}
        onEdit={handleEdit}
      />
    </Container>
  );
};
