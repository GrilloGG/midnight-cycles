import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { useMutation } from "@apollo/client";
import { DELETE_USER, REMOVE_FEEDBACK } from "../utils/mutations";
import Auth from "../utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const iconTimes = <FontAwesomeIcon icon={faTimes} />;

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  if (!Auth.loggedIn()) {
    window.location.assign("/");
  }
  const [deleteUser, { error }] = useMutation(DELETE_USER);

  const deleteButton = async event => {
    event.preventDefault();
    try {
      const { data } = await deleteUser({});
      console.log(data);
      Auth.logout();
      window.location.assign("/");
    } catch (error) {
      console.error(error);
    }
  };

  const [removeFeedback, { feedbackError }] = useMutation(REMOVE_FEEDBACK);

  const handleReviewDelete = async feedbackId => {
    console.log(feedbackId);
    try {
      const { data } = await removeFeedback({
        variables: { feedbackId },
      });
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const { loading, data } = useQuery(QUERY_ME);
  if (data) {
    console.log(data.me.feedbacks);
  }

  //if (data.me.feedbacks.length === 0) {
  // return <h3>No feedbacks Yet</h3>;
  //}

  //console.log(data.me.feedbacks[0]);
  return (
    <div>
      {loading ? (
        <>
          <h1>Loading</h1>
        </>
      ) : (
        <div>
          <div className="background-picture-1">
            <div className="account-background">
              <h2>Hello {data.me.username} </h2>
              <h3>Your reviews:</h3>
              {data.me.feedbacks &&
                data.me.feedbacks.slice(0, 5).map(feedback => (
                  <div key={feedback._id} className="feedback-account-card">
                    <div>
                      <p className="feedback-date">{feedback.createdAt}</p>
                      <p className="feedback-text">{feedback.feedbackText}</p>
                    </div>
                    <div>
                      <button
                        value={feedback._id}
                        onClick={() => handleReviewDelete(feedback._id)}
                      >
                        {iconTimes}
                      </button>
                    </div>
                  </div>
                ))}
              <button className="account-button" onClick={logout}>
                Logout
              </button>

              <button className="account-button" onClick={deleteButton}>
                Delete account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Account;
