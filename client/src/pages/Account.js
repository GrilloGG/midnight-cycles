import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const iconTimes = <FontAwesomeIcon icon={faTimes} />;

  if (!Auth.loggedIn()) {
    window.location.assign("/");
  }
  const { loading, data } = useQuery(QUERY_ME);
  if (data) {
    console.log(data.me);
  }

  //console.log(data.me.feedbacks[0]);
  return (
    <div>
      {loading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <div>
          {data.me.feedbacks &&
            data.me.feedbacks.slice(0, 5).map(feedback => (
              <div key={feedback._id} className="feedback-card">
                <div className="feedback-title">
                  {" "}
                  <p className="feedback-user">
                    {feedback._id} -{" "}
                    <span className="feedback-date">{feedback.createdAt}</span>
                  </p>
                </div>

                <p className="feedback-text">{feedback.feedbackText}</p>
                <button>{iconTimes}</button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
export default Account;
