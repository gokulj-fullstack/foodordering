import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  return (
    <nav className="nav-links">
      <Link to="/home">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/offers">Offers</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavLinks;
