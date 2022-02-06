import React from "react";
import "../App.css";

import FeedbackForm from "../components/FeedbackForm";
import ContactForm from "../components/ContactForm";

export default function Account() {
  return (
    <>
      <div className="background-picture-1">
        <div className="contact-form ">
          <FeedbackForm />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
