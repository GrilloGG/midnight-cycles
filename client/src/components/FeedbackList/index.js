import React from "react";
import "./index.css";

const FeedbackList = ({ feedbacks }) => {
  if (!feedbacks.length) {
    return <h3>No feedbacks Yet</h3>;
  }

  return (
    <div>
      {feedbacks &&
        feedbacks.slice(0, 5).map(feedback => (
          <div key={feedback._id} className="feedback-card">
            <div className="feedback-title">
              {" "}
              <p className="feedback-user">
                {feedback.feedbackAuthor} -{" "}
                <span className="feedback-date">{feedback.createdAt}</span>
              </p>
            </div>

            <p className="feedback-text">{feedback.feedbackText}</p>
          </div>
        ))}
    </div>
  );
};

export default FeedbackList;
