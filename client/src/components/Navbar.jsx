import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Navbar.scss";

function Navbar({ isAdminLoggedIn }) {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/" className="navbar-logo">
          ECFORME
        </Link>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/services"> Service </Link>
          <Link to="/products"> Product </Link>
          <Link to="/about"> About </Link>
          <Link to="/taskform"> Task </Link>
          <Link to="/login"> Login </Link>
          <Link to="/register"> Signup </Link>

          {isAdminLoggedIn && <Link to="/admin"> Admin </Link>}
          {/* Render the "Admin" link only if isAdminLoggedIn is true */}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/services"> Service </Link>
        <Link to="/products"> Product </Link>
        <Link to="/about"> About </Link>
        <Link to="/taskform"> Task </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Signup </Link>

        {isAdminLoggedIn && <Link to="/admin"> Admin </Link>}
        {/* Render the "Admin" link only if isAdminLoggedIn is true */}

        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
