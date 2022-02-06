import React, { useState } from "react";
import { Button } from "../Button/index.js";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../assest/logo-black-hq.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Auth from "../../utils/auth";

function Navbar() {
  const iconTimes = <FontAwesomeIcon icon={faTimes} />;
  const iconBars = <FontAwesomeIcon icon={faBars} />;

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="in-line">
      <nav className="navbar1">
        <Link to="/" className="" onClick={closeMobileMenu}>
          <img className="logo-navbar" src={logo} alt="logo-navbar" />
        </Link>
      </nav>
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i>{click ? iconTimes : iconBars} </i>
          <i className={click ? "fas fa-time" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          {Auth.loggedIn() ? (
            <>
              <li>
                <Link
                  className="nav-links-mobile"
                  to="/account"
                  onClick={closeMobileMenu}
                >
                  Account
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  className="nav-links-mobile"
                  to="/log-in"
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
              </li>
            </>
          )}
        </ul>
        <Button />
      </nav>
    </div>
  );
}

export default Navbar;
