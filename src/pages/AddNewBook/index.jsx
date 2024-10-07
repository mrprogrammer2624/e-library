import { addBook } from "@/action";
import { Form, Input, Button, DatePicker, Select, message } from "antd";
import { useDispatch } from "react-redux";

const { Option } = Select;

export const AddNewBook = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const newBook = {
      ...values,
      id: Date.now(),
      publicationDate: values.publicationDate.format("YYYY-MM-DD"),
      borrowed: false,
    };
    dispatch(addBook(newBook));
    message.success("Book added successfully!");
    form.resetFields();
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h2>Add New Book</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input the book title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: "Please input the author name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="genre"
          label="Genre"
          rules={[{ required: true, message: "Please select the genre!" }]}
        >
          <Select>
            <Option value="Fiction">Fiction</Option>
            <Option value="Non-Fiction">Non-Fiction</Option>
            <Option value="Science Fiction">Science Fiction</Option>
            <Option value="Mystery">Mystery</Option>
            <Option value="Romance">Romance</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="publicationDate"
          label="Publication Date"
          rules={[
            { required: true, message: "Please select the publication date!" },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Book
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
