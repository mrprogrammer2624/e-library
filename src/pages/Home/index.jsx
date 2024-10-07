import { MainHook } from "@/hooks";
import BookListing from "./BookListing";
import BookDetail from "./BookDetail";
import AddEditBookForm from "./AddEditBookForm";
import { Container } from "@/components";

export const Home = () => {
  const {
    selectedBook,
    activeComponent,
    handleBookSelect,
    handleAddBook,
    setActiveComponent,
    handleEditBook,
    handleBorrowReturn,
    books,
  } = MainHook();
  return (
    <Container>
      <div className="site-layout-content" style={{ margin: "16px 0" }}>
        {activeComponent === "listing" && (
          <BookListing books={books} onBookSelect={handleBookSelect} />
        )}
        {activeComponent === "detail" && selectedBook && (
          <BookDetail
            book={selectedBook}
            onBorrowReturn={handleBorrowReturn}
            onEdit={() => setActiveComponent("edit")}
          />
        )}
        {(activeComponent === "add" || activeComponent === "edit") && (
          <AddEditBookForm
            book={activeComponent === "edit" ? selectedBook : null}
            onSubmit={
              activeComponent === "add" ? handleAddBook : handleEditBook
            }
          />
        )}
      </div>
    </Container>
  );
};
