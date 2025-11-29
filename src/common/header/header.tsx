import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./header.css";
import Navigation from "../navigation/navigation";
import { Button } from "react-bootstrap";
import { getUserRole } from "../../utils/userdata";

  function Header() {
  const userInfo = getUserRole();

  const signOut = () => {
    sessionStorage.removeItem("userInfo");
    window.location.reload();
  };


  return (
    <header className="navbar">
      <div className="logo">
        <h2>FoodRush</h2>
      </div>

      {/* navigation */}
      <Navigation />

      <div className="nav-icons">

            <div className="header-left">
        <span className="user-name">{userInfo.name}</span>
        
      </div>

      <Button className="logout-btn" onClick={signOut}>
        Logout
      </Button>


      </div>
    </header>
  );
};


export default Header;
