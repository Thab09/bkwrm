import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/reading">Reading</Link>
      <Link to="/planned">Plan To Read</Link>
      <Link to="/completed">Completed</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Nav;
