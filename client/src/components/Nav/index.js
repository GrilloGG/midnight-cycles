import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="">
      <nav className="">
        <div className="">
          <NavLink className="" to="/">
            Midnight Cycles
          </NavLink>
          <div>
            <ul className="">
              <li className="">
                <NavLink className="" to="/">
                  Home
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" to="/about">
                  About
                </NavLink>
              </li>
              <li className="">
                <NavLink className="" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
