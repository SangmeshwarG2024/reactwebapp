import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logout from "../Pages/Logout";

const NavBar = () => {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li to="/login">
          <Logout />
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavBar;
