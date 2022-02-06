import React from "react";
import "../App.css";
import { useQuery } from "@apollo/client";
import FeedbackList from "../components/FeedbackList";

import { QUERY_FEEDBACKS } from "../utils/queries";

export default function Home() {
  const { loading, data } = useQuery(QUERY_FEEDBACKS);
  if (data) {
    console.log(data);
  }

  const feedbacks = data?.feedbacks || [];
  console.log(feedbacks);
  return (
    <>
      <div className="background-picture-1">
        <div className="intro-home-page">
          <div className="title-home-page">
            <h2>Welcome to Midnight Cycles</h2>
            <p>
              At Midnight Cycles we aim to restore quality used frames and
              either modernise them through welding disc brake mounts, adding
              mounts, eyelets and internal routing for a Melbourne redesigned
              touring / gravel / commuter bike that is completely personalised
              and boutique. We also do classic restorations and high end bike
              builds from a home based workshop emporium, namely Midnight
              Cycles!
            </p>
          </div>
        </div>

        <div className="reviews-div">
          <h2>Some of the lastest reviews:</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <FeedbackList
              feedbacks={feedbacks}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </>
  );
}
