import React, { useState } from "react";
import { Menu } from "antd";
import {
  SettingOutlined,
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function Header() {
  const [current, setCurrent] = useState("home");

  const { SubMenu, Item } = Menu;
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>
      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Menu.Item key="setting:1">Profile</Menu.Item>
        <Menu.Item key="setting:2">Logout</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default Header;
