import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.scss";

const Nav = ({ isOpen }) => {
  return (
    <nav className={`nav ${isOpen ? "show" : ""}`} id="navbar">
      <ul className="navLinks">
        <li>
          <NavLink to="/" activeclassname="active" exact="true">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/a" activeclassname="active">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink to="/b" activeclassname="active">
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink to="/c" activeclassname="active">
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink to="/d" activeclassname="active">
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
