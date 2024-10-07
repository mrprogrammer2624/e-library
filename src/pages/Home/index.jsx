import { MainHook } from "@/hooks";
import BookListing from "./BookListing";
import { Container } from "@/components";

export const Home = () => {
  const { activeComponent, handleBookSelect, books } = MainHook();
  return (
    <Container>
      <div className="site-layout-content" style={{ margin: "16px 0" }}>
        {activeComponent === "listing" && (
          <BookListing books={books} onBookSelect={handleBookSelect} />
        )}
      </div>
    </Container>
  );
};
