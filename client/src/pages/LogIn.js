import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "../App.css";

import Auth from "../utils/auth";

const Login = props => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <div className="user-form">
          <h1 className="title-user">Login</h1>
          <form className="form-user" onSubmit={handleFormSubmit}>
            <input
              className="input-user"
              placeholder="Email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="input-user"
              placeholder="Password"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <div className="btns-user">
              <button className="button-user" type="submit">
                Log in
              </button>
            </div>
            <p>
              Don't have an account with us?{" "}
              <a className="a-user" href="/sign-up">
                Sign up here
              </a>
            </p>
          </form>
        </div>
      )}

      {error && <div className="">{error.message}</div>}
    </div>
  );
};

export default Login;
