import React, { useState } from "react";
import "../../App.css";

const ContactForm = props => {
  const [formState, setFormState] = useState({ email: "" });
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

    setFormState({
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      review: "",
    });
  };
  return (
    <>
      <h1 className="title-contact">Contact Us</h1>
      <form className="form-contact" onSubmit={handleFormSubmit}>
        <input
          className="input-contact"
          placeholder="First Name"
          name="first-name"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          className="input-contact"
          placeholder="Last Name"
          name="last-name"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
        <input
          className="input-contact"
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          className="input-contact"
          placeholder="Phone Number"
          name="phone-number"
          type="number"
          value={formState.phoneNumber}
          onChange={handleChange}
        />

        <textarea
          className="textarea-contact"
          name="text-area"
          placeholder="Write your review here"
          maxLength="500"
          value={formState.review}
          onChange={handleChange}
        ></textarea>
        <div className="btns-contact">
          <button className="button-contact" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
