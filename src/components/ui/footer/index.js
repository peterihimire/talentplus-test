import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../assets/images/facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/images/instagram.svg";
import { ReactComponent as Youtube } from "../../../assets/images/youtube.svg";
import { ReactComponent as Twitter } from "../../../assets/images/twitter.svg";
import { ReactComponent as Discord } from "../../../assets/images/discord.svg";

import Input from "../footerInput";

import "./styles.scss";

const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className="wrapper">
        <div className={`first`}>
          <div className={`logo`}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <p>
            Reach out to us on any of our social
            <br /> media networks
          </p>
          <div className={`social-list`}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Facebook width="37px" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Youtube width="37px" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Twitter width="37px" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Instagram width="37px" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Discord width="37px" />
            </a>
          </div>
        </div>
        <div className={`second`}>
          <div className={`quick-links-wrapper`}>
            <h3>Useful Links</h3>
            <ul className={`quick-links`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products-services">About Us</Link>
              </li>
              <li>
                <Link to="/our-process">Our Courses</Link>
              </li>
              <li>
                <Link to="/our-process">Testimonials</Link>
              </li>
              <li>
                <Link to="/our-process">Our Community</Link>
              </li>
            </ul>
          </div>

          <div className={`help-wrapper`}>
            <h3>Community</h3>
            <ul className={`quick-links`}>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/products-services">Partners</Link>
              </li>
              <li>
                <Link to="/">Suggestion</Link>
              </li>
              <li>
                <Link to="/products-services">Blog</Link>
              </li>
              <li>
                <Link to="/">Newsletter</Link>
              </li>
            </ul>
          </div>

          <div className={`subscribe-wrapper`}>
            <h3>Subscribe Us</h3>

            <form className={`form`}>
              <div className={`formGroup`}>
                <Input
                  type="email"
                  id="email"
                  // required
                  name="email"
                  placeholder="peter@gmail.com"
                  src="/images/send-icon.svg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
