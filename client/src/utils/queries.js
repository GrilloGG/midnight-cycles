import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      feedbacks {
        _id
        feedbackText
        createdAt
      }
    }
  }
`;

export const QUERY_FEEDBACK = gql`
  query feedback($feedbackId: ID!) {
    feedback(feedbackId: $feedbackId) {
      _id
      feedbackText
      feedbackAuthor
      createdAt
    }
  }
`;

export const QUERY_FEEDBACKS = gql`
  query feedbacks {
    feedbacks {
      _id
      feedbackText
      feedbackAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      feedbacks {
        _id
        feedbackText
        feedbackAuthor
        createdAt
      }
    }
  }
`;
