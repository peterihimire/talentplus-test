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
              {/* BRID<span>GET</span> */}
              <img src={logo} alt="" />
            </Link>
          </div>
          <p>reach out to us on any of our social media networks</p>
          <div className={`social-list`}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Facebook width="17px" />
              {/* <FontAwesomeIcon icon={faCoffee} /> */}
              {/* <FontAwesomeIcon icon={faSquareInstagram} /> */}
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Youtube width="17px" />
              {/* <FontAwesomeIcon icon={faFacebookSquare} /> */}
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              {/* <FontAwesomeIcon icon={faTwitterSquare} /> */}
              <Twitter width="17px" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Instagram width="17px" />
              {/* <FontAwesomeIcon icon={faLinkedin} /> */}
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <Discord width="17px" />
              {/* <FontAwesomeIcon icon={faLinkedin} /> */}
            </a>
          </div>

          {/* <div className={`newsletter`}>
            <p>
              Subscribe to our weekly newsletter, by entering your email below.
            </p>
            <form className={`form`}>
              <div className={`formGroup`}>
                <Input
                  type="email"
                  id="email"
                  // required
                  name="email"
                  placeholder="Enter your email..."
                  src="/images/send-icon.svg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </form>
          </div> */}
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

          <div className={`location-wrapper`}>
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

          <div className={`location-wrapper`}>
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

            {/* <ul className={`quick-links`}>
              <li>
                <Link to="/products-services">Help Center</Link>
              </li>
              <li>
                <Link to="/our-process">Site Map</Link>
              </li>
              <li>
                <Link to="/contact-us">IP Whitelist</Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
      {/* <div className={`outro wrapper`}>
        <div className="copyright">
          <p>Copyright © 2023 — TechTime Limited. All Rights Reserved.</p>
        </div>
        <div className={`policy-terms`}>
          <div className="policy">
            <Link to="/privacy-policy">— Privacy Policy</Link>
          </div>
          <div className="terms">
            <Link to="/terms-and-conditions">— Terms of Use</Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
