import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Button() {
  const iconUser = <FontAwesomeIcon icon={faUser} />;

  return (
    <Link to="sign-up">
      <button className="btn">
        <i>{iconUser}</i>
      </button>
    </Link>
  );
}
