const mongoose = require("mongoose");

const RewardsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Rewards = mongoose.model("Rewards", RewardsSchema, "rewards");
module.exports = Rewards;
