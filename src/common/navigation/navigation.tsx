import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

const navigation = () => {
  return (
    <nav className="nav-links">
      <Link to="/dashboard">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/offers">Offers</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default navigation;
