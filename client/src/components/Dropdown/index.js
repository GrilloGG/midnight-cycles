import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const logout = event => {
    event.preventDefault();
    Auth.logout();
    setClick(false);
  };

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {Auth.loggedIn() ? (
          <>
            <li>
              <Link
                className="dropdown-link"
                to="/account"
                onClick={() => setClick(false)}
              >
                Account
              </Link>
            </li>
            <li>
              <Link className="dropdown-link" to="/" onClick={logout}>
                Log out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                className="dropdown-link"
                to="/log-in"
                onClick={() => setClick(false)}
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to="/sign-up"
                onClick={() => setClick(false)}
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default Dropdown;
