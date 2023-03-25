import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
// import {
//   ArrowDownward,
//   DarkModeOutlined,
//   Search,
//   PersonOutline,
//   ShoppingCartOutlined,
// } from "@mui/icons-material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import { WbSunnyOutlined } from "@mui/icons-material";
// import useDarkMode from "use-dark-mode";

import "./styles.scss";

const Nav = ({ isOpen }) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  // const darkMode = useDarkMode(false);
  // console.log(darkMode);

  const [about, openAbout] = useState(false);

  useEffect(() => {
    openAbout(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  return (
    <nav className={`nav ${isOpen ? "show" : ""}`} id="navbar">
      <ul className="navLinks">
        <li>
          <NavLink to="/" activeclassname="active" exact="true">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/collections" activeclassname="active">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" activeclassname="active">
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" activeclassname="active">
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeclassname="active">
            Community
          </NavLink>
        </li>
        <div className={`nav-btn-div`}>
          <button className="btn-white  btn-medium">Enroll Now</button>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
