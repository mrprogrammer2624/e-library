import { Menu } from "antd";
import { BookOutlined, PlusOutlined } from "@ant-design/icons";
import { Container } from "@/components/";
import { MainHook } from "@/hooks";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { handleMenuClick } = MainHook();
  const location = useLocation();

  const selectedKey = location.pathname === "/add-book" ? "add" : "listing";

  return (
    <header>
      <Container>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
          <Menu.Item key="listing" icon={<BookOutlined />}>
            <Link to="/" onClick={() => handleMenuClick("listing")}>
              Book Listing
            </Link>
          </Menu.Item>
          <Menu.Item key="add" icon={<PlusOutlined />}>
            <Link to="/add-book" onClick={() => handleMenuClick("add")}>
              Add New Book
            </Link>
          </Menu.Item>
        </Menu>
      </Container>
    </header>
  );
};
