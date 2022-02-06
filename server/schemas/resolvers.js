const { AuthenticationError } = require("apollo-server-express");
const { User, Feedback } = require("../models");
const { signToken } = require("../utils/auth");
const bcrypt = require("bcrypt");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("feedbacks");
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("feedbacks");
    },

    feedbacks: async () => {
      return Feedback.find().sort({ createdAt: -1 });
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
    deleteUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    changePassword: async (parent, { password, newPassword }, context) => {
      const user = await User.findOne(context.user);
      console.log(context.user);
      const correctPw = await user.isCorrectPassword(password);
      console.log(correctPw);
      if (!correctPw) {
        throw new AuthenticationError("Current password could not be verified");
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { password: newPassword },
        { new: true }
      );

      return updatedUser;
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
