import { useState } from "react";
import { List, Card, Input, Select, DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const BookListing = ({ books }) => {
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSearch = (value) => {
    setSearchTerm(value);
    filterBooks(value, selectedGenre, selectedDate);
  };

  const handleGenreChange = (value) => {
    setSelectedGenre(value);
    filterBooks(searchTerm, value, selectedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    filterBooks(searchTerm, selectedGenre, date);
  };

  const filterBooks = (term, genre, date) => {
    let filtered = books;
    if (term) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(term.toLowerCase()) ||
          book.author.toLowerCase().includes(term.toLowerCase())
      );
    }
    if (genre) {
      filtered = filtered.filter((book) => book.genre === genre);
    }
    if (date) {
      const selectedDate = date.toDate();
      filtered = filtered.filter(
        (book) => new Date(book.publicationDate) >= selectedDate
      );
    }

    setFilteredBooks(filtered);
  };

  const genres = [...new Set(books.map((book) => book.genre))];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search by title or author"
          prefix={<SearchOutlined />}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 200, marginRight: 8 }}
        />
        <Select
          placeholder="Select genre"
          style={{ width: 200, marginRight: 8 }}
          onChange={handleGenreChange}
        >
          <Option value="">All Genres</Option>
          {genres.map((genre) => (
            <Option key={genre} value={genre}>
              {genre}
            </Option>
          ))}
        </Select>
        <DatePicker
          placeholder="Filter by publication date"
          onChange={handleDateChange}
        />
      </div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filteredBooks}
        renderItem={(book) => (
          <List.Item>
            <Card
              hoverable
              onClick={() => navigate(`/show-details/${book.id}`)}
              title={book.title}
              extra={
                book.borrowed ? (
                  <span style={{ color: "red" }}>Borrowed</span>
                ) : (
                  <span style={{ color: "green" }}>Available</span>
                )
              }
            >
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Published: {book.publicationDate}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BookListing;
