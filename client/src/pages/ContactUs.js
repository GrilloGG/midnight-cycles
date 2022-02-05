import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "../App.css";

import Auth from "../utils/auth";
const ContactUs = props => {
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
      firstName: "",
      lastName: "",
      review: "",
    });
  };
  return (
    <>
      <div className="background-picture-1">
        <div className="user-form-card">
          <div className="user-form ">
            <h1 className="title-user">Leave us a review</h1>
            <form className="form-user" onSubmit={handleFormSubmit}>
              <input
                className="input-user"
                placeholder="First Name"
                name="first-name"
                type="text"
                value={formState.firstName}
                onChange={handleChange}
              />
              <input
                className="input-user"
                placeholder="Last Name"
                name="last-name"
                type="text"
                value={formState.lastName}
                onChange={handleChange}
              />
              <input
                className="input-user"
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />

              <textarea
                className="input-user"
                name="text-area"
                placeholder="Write your review here"
                maxlength="500"
                value={formState.review}
                onChange={handleChange}
              ></textarea>
              <div className="btns-user">
                <button className="button-user" type="submit">
                  Submit review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
