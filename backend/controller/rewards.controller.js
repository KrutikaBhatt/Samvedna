const Rewards = require("../models/rewards");

exports.getRewardsByName = async (name) => {
  const data = await Rewards.findOne({ type: name });
  // if (!data) {
  //   return res.send({
  //     success: false,
  //     message: "Cannot find the requested reward",
  //   });
  // }
  // res.send({
  //   success: true,
  //   message: "Reward found",
  //   data,
  // });
  return data;
};
