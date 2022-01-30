import React, { useState } from "react";
import { Button } from "../Button/index.js";
import { Link } from "react-router-dom";
import "./index.css";
import Dropdown from "../Dropdown/index.js";
import logo from "../../assest/logo-black-hq.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const iconTimes = <FontAwesomeIcon icon={faTimes} />;
  const iconBars = <FontAwesomeIcon icon={faBars} />;
  const iconArrowDown = <FontAwesomeIcon icon={faCaretDown} />;

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

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
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Workshop
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
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i>{iconArrowDown}</i>
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </div>
  );
}

export default Navbar;
