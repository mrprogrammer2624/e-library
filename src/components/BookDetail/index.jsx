import { Card, Button, Descriptions } from "antd";
import { useNavigate } from "react-router-dom";

export const BookDetail = ({ book, onBorrowReturn }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${book.id}`);
  };

  return (
    <Card
      title={book.title}
      extra={
        <Button type="primary" onClick={handleEdit}>
          Edit
        </Button>
      }
    >
      <Descriptions bordered>
        <Descriptions.Item label="Author">{book.author}</Descriptions.Item>
        <Descriptions.Item label="Genre">{book.genre}</Descriptions.Item>
        <Descriptions.Item label="Publication Date">
          {book.publicationDate}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          {book.borrowed ? "Borrowed" : "Available"}
        </Descriptions.Item>
      </Descriptions>
      <Button
        type="primary"
        onClick={() => onBorrowReturn(book.id)}
        style={{ marginTop: 16 }}
      >
        {book.borrowed ? "Return Book" : "Borrow Book"}
      </Button>
    </Card>
  );
};
