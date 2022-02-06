const db = require("../config/connection");
const { User, Feedback } = require("../models");
const userSeeds = require("./userSeeds.json");
const feedbackSeeds = require("./feedbackSeeds.json");

db.once("open", async () => {
  try {
    await Feedback.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < feedbackSeeds.length; i++) {
      const { _id, feedbackAuthor } = await Feedback.create(feedbackSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: feedbackAuthor },
        {
          $addToSet: {
            feedbacks: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
