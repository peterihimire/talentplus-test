import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav";
import { useLocation } from "react-router-dom";
// import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import logo from "../../../assets/images/logo.svg";
import logoBlack from "../../../assets/images/logo-black.svg";
import "./styles.scss";

const Header = ({ isOpen, clicked }) => {
  const router = useLocation();

  const [isDropOpen, setDropOpen] = useState(false);
  const [bgChange, setBgChange] = useState(false);

  const dropHandler = (payload) => {
    setDropOpen(payload);
  };

  useEffect(() => {
    if (!isOpen) {
      setDropOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setDropOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header className={`header   ${bgChange || isOpen ? "bgHeader" : ""}`}>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            {/* BRID<span>GET</span> */}
            {/* <Logo /> */}
            {bgChange ? (
              <img src={logoBlack} alt="" />
            ) : (
              <img src={logo} alt="" />
            )}
          </Link>
        </div>

        <Nav
          bgChange={bgChange}
          isDrop={isDropOpen}
          isOpen={isOpen}
          clicked={(payload) => dropHandler(payload)}
        />

        <div className="hamburgerBtn">
          <button
            type="button"
            aria-label="navigation button"
            onClick={clicked}
            className={`hamburger hamburger--spin ${isOpen ? "is-active" : ""}`}
          >
            <span className="hamburger-box">
              <span
                className={`${
                  bgChange
                    ? "hamburger-inner hamburger-inner-dark"
                    : "hamburger-inner hamburger-inner-light"
                }`}
              ></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
