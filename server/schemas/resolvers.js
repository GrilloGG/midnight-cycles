const { AuthenticationError } = require("apollo-server-express");
const { User, Feedback } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    feedbacks: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Feedback.find(params).sort({ createdAt: -1 });
    },
    feedback: async (parent, { feedbackId }) => {
      return Feedback.findOne({ _id: feedbackId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    //deleteUSer to be tested when I can log in on the front end
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addFeedback: async (parent, { feedbackText }, context) => {
      if (context.user) {
        const feedback = await Feedback.create({
          feedbackText,
          feedbackAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { feedbacks: feedback._id } }
        );

        return feedback;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeFeedback: async (parent, { feedbackId }, context) => {
      if (context.user) {
        const feedback = await Feedback.findOneAndDelete({
          _id: feedbackId,
          feedbackAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { feedbacks: feedback._id } }
        );

        return feedback;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
