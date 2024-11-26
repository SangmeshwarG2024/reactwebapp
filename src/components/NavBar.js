import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Pages/Logout";

const NavBar = () => {
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
};

export default NavBar;
