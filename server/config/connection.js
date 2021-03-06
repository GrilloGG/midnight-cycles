const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/midnight-cycles",
  {
    useNewUrlParser: true,
  }
);

module.exports = mongoose.connection;
