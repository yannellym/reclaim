import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./Sidebar.css"
import { useAuth } from "../../pages/firebaseConfig/firebaseConfig"
import {Link} from "react-router-dom";
import Button from "../Button/Button"

export default function SideBar (props) {

  const currentUser = useAuth();

  return (
    // Pass on our props
    <Menu {...props} right >
      <main id="page-wrap">
        <a href="./#howitworks" className="menu-item">How it works</a> <br />
        <a href="./#facts" className="menu-item">Facts</a> <br />
        <a href="./#goal" className="menu-item">Goal</a> <br />
        <a href="./#aboutus" className="menu-item">About Us</a> <br />
        <Link to={currentUser? '/marketfeed' : '/login'}> <Button className="nav-btn" /></Link>
      </main>
    </Menu>
  );
};
