import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_FEEDBACK } from "../../utils/mutations";
import { QUERY_FEEDBACKS } from "../../utils/queries";

import Auth from "../../utils/auth";

const FeedbackForm = () => {
  const [formState, setFormState] = useState("");

  const [addFeedback, { error }] = useMutation(ADD_FEEDBACK, {
    update(cache, { data: { addFeedback } }) {
      try {
        const { feedbacks } = cache.readQuery({ query: QUERY_FEEDBACKS });

        cache.writeQuery({
          query: QUERY_FEEDBACKS,
          data: { feedbacks: [addFeedback, ...feedbacks] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addFeedback({
        variables: {
          ...formState,
        },
      });
      console.log(Auth.getProfile().data.email);
      setFormState({ feedbackText: "", feedbackAuthor: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(event);
    if (name === "feedbackText" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h1 className="title-contact">Leave us a review</h1>

      {Auth.loggedIn() ? (
        <>
          <form className="form-contact" onSubmit={handleFormSubmit}>
            <textarea
              name="feedbackText"
              placeholder="Write here your review"
              value={formState.feedbackText}
              className="textarea-contact"
              onChange={handleChange}
            ></textarea>

            <div className="btns-contact">
              <button className="button-contact" type="submit">
                Add Review
              </button>
            </div>
            {error && <div className="">{error.message}</div>}
          </form>
        </>
      ) : (
        <p className="auth-contact">
          You need to be logged in to post a review. Do you already have an
          account with us? Please <Link to="/log-in">login</Link> or{" "}
          <Link to="/sign-up">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default FeedbackForm;
