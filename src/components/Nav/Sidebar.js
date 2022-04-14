import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css"

export default function SideBar (props) {
  return (
    // Pass on our props
    <Menu {...props} right >
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/services">
        Services
      </a>

      <a className="menu-item" href="/contact">
        Contact us
      </a>
    </Menu>
  );
};
