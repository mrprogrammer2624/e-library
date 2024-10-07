import { Form, Input, Button, DatePicker, Select } from "antd";
import moment from "moment";
import { useEffect } from "react";

const { Option } = Select;

const AddEditBookForm = ({ book, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (book) {
      form.setFieldsValue({
        ...book,
        publicationDate: moment(book.publicationDate),
      });
    }
  }, [book, form]);

  const handleSubmit = (values) => {
    onSubmit({
      ...values,
      publicationDate: values.publicationDate.format("YYYY-MM-DD"),
      id: book ? book.id : null,
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      initialValues={
        book ? { ...book, publicationDate: moment(book.publicationDate) } : {}
      }
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="author"
        label="Author"
        rules={[{ required: true, message: "Please input the author!" }]}
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
          <Option value="Romance">Romance</Option>
          <Option value="Mystery">Mystery</Option>
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
          {book ? "Update Book" : "Add Book"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddEditBookForm;
