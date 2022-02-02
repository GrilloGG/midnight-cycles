import React from "react";
import "../App.css";

import Auth from "../utils/auth";

export default function Account() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <h1 className="account">This is account</h1>
      <button className="btn btn-lg btn-light m-2" onClick={logout}>
        {" "}
        Logout
      </button>
    </>
  );
}
