const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    feedbacks: [Feedback]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Feedback {
    _id: ID
    feedbackText: String
    feedbackAuthor: String
    createdAt: String
  }

  type Query {
    users: [User]!
    user(username: ID!): User
    feedbacks: [Feedback]!
    feedback(feedbackId: ID!): Feedback
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    deleteUser: User
    changePassword(password: String!, newPassword: String!): User
    addFeedback(feedbackText: String!): Feedback
    removeFeedback(feedbackId: ID!): Feedback
  }
`;

module.exports = typeDefs;
