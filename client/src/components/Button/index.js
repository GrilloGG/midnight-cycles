import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../Dropdown/index.js";

export function Button() {
  const iconUser = <FontAwesomeIcon icon={faUser} />;
  const iconArrowDown = <FontAwesomeIcon icon={faCaretDown} />;

  const [dropdown, setDropdown] = useState(false);

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
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link to="sign-up">
        <button className=" btn-user">
          <i>
            {iconUser}
            {iconArrowDown}
          </i>
        </button>
      </Link>
      {dropdown && <Dropdown />}
    </div>
  );
}
