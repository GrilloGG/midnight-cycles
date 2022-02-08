import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const DELETE_USER = gql`
  mutation deleteUser {
    deleteUser {
      _id
      username
      email
      password
      feedbacks {
        _id
        feedbackText
        feedbackAuthor
        createdAt
      }
    }
  }
`;

export const REMOVE_FEEDBACK = gql`
  mutation removeFeedback($feedbackId: ID!) {
    removeFeedback(feedbackId: $feedbackId) {
      _id
      feedbackText
      feedbackAuthor
      createdAt
    }
  }
`;
export const ADD_FEEDBACK = gql`
  mutation addFeedback($feedbackText: String!) {
    addFeedback(feedbackText: $feedbackText) {
      _id
      feedbackText
      feedbackAuthor
      createdAt
    }
  }
`;
