const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");
const rewardController = require("./rewards.controller");
const { use } = require("chai");
const { default: mongoose } = require("mongoose");

exports.signup = catchAsyncError(async (req, res, next) => {
  console.log(req.body);
  if (!req.body.username) {
    res.send({
      success: false,
      message: "Username is required",
    });
  } else if (!req.body.wallet_address) {
    res.send({
      success: false,
      message: "Wallet address is required",
    });
  } else {
    const { username, wallet_address } = req.body;
    const takenUsername = await User.findOne({ username });
    const takenWalletAddress = await User.findOne({ wallet_address });

    if (takenUsername) {
      return res.send({
        success: false,
        message: "Username has already been taken",
      });
    } else if (takenWalletAddress) {
      return res.send({
        success: false,
        message: "Wallet addresss has already been taken",
      });
    } else {
      const newUser = new User({
        username: username,
        wallet_address: wallet_address.toLowerCase(),
      });
      const savedUser = await newUser.save();
      res.send({
        success: true,
        message: "User Registered Successfully!",
        savedUser,
      });
    }
  }
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { wallet_address } = req.body;
  console.log(wallet_address);
  User.findOne({ wallet_address: wallet_address }).then((dbUser) => {
    console.log("user", dbUser);
    if (!dbUser) {
      return res.send({
        success: false,
        message: "Invalid Username or Password!",
      });
    }
    const payload = {
      id: dbUser._id,
      username: dbUser.username,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      },
      (err, token) => {
        if (err) {
          return res.send({
            success: false,
            message: "error!",
          });
        }
        return res.send({
          success: true,
          message: "User Logged In Successfully!",
          token: token,
          user: {
            id: dbUser._id,
            username: dbUser.username,
            wallet_adress: dbUser.wallet_address,
          },
        });
      }
    );
  });
  console.log(req.body);
  if (!req.body.username) {
    res.send({
      success: false,
      message: "Username is required",
    });
  } else if (!req.body.wallet_address) {
    res.send({
      success: false,
      message: "Wallet address is required",
    });
  } else {
    const { username, wallet_address } = req.body;
    const takenUsername = await User.findOne({ username });
    const takenWalletAddress = await User.findOne({ wallet_address });

    if (takenUsername) {
      return res.send({
        success: false,
        message: "Username has already been taken",
      });
    } else if (takenWalletAddress) {
      return res.send({
        success: false,
        message: "Wallet addresss has already been taken",
      });
    } else {
      const newUser = new User({
        username: username,
        wallet_address: wallet_address.toLowerCase(),
      });
      const savedUser = await newUser.save();
      res.send({
        success: true,
        message: "User Registered Successfully!",
        savedUser,
      });
    }
  }
});

exports.login = catchAsyncError(async (req, res, next) => {
  const { wallet_address } = req.body;
  console.log(wallet_address);
  User.findOne({ wallet_address: wallet_address }).then((dbUser) => {
    console.log("user", dbUser);
    if (!dbUser) {
      return res.send({
        success: false,
        message: "Invalid Username or Password!",
      });
    }
    const payload = {
      id: dbUser._id,
      username: dbUser.username,
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      },
      (err, token) => {
        if (err) {
          return res.send({
            success: false,
            message: "error!",
          });
        }
        return res.send({
          success: true,
          message: "User Logged In Successfully!",
          token: token,
          user: {
            id: dbUser._id,
            username: dbUser.username,
            wallet_adress: dbUser.wallet_address,
            is_moderator: dbUser.is_moderator,
            is_therapist: dbUser.is_therapist,
          },
        });
      }
    );
  });
});

exports.verifyToken = catchAsyncError(async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(500).send({
      message: "User not Authentic!",
    });
  }
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (!verified) {
    return res.status(500).send({
      message: "User Authentication failed!",
      isValid: false,
    });
  }
  const userData = await User.findById(verified.id);
  res.send({
    message: true,
    username: userData["username"],
  });
});

exports.currentUser = catchAsyncError(async (req, res, next) => {
  const userData = await User.findById(req.user).select("-password");
  res.send({
    isLoggedIn: true,
    user: userData,
  });
});

exports.logout = catchAsyncError(async (req, res, next) => {
  const token = req.header("x-auth-token");
  const result = jwt.verify(token, process.env.JWT_SECRET);
  if (result) {
    return res.send({
      success: true,
      message: "User Logged Out Successfully!",
    });
  }
});

exports.addReward = async (req, res) => {
  console.log(req.body);
  const reward = await rewardController.getRewardsByName(req.body.name);
  console.log("this is the reward");
  console.log(reward);
  console.log(req.body.id);
  const user = await User.findById(mongoose.Types.ObjectId(req.body.id)).select(
    "-password"
  );
  console.log("this is the user");
  console.log(user);
  user.rewards.push(reward._id);
  await user.save();
  res.send({
    success: true,
    message: "Reward given succesfully",
  });
};

exports.deleteReward = catchAsyncError(async (req, res) => {
  console.log(req.body);
  const rewardIds = req.body.rewardId;
  const user = await User.findById(req.body.id).select("-password");
  for (var i = 0; i < rewardIds.length; i++) {
    const index = user.rewards.indexOf(rewardIds[i]);
    if (index != -1) {
      user.rewards.splice(index, 1);
    }
  }
  await user.save();
  res.send({
    success: true,
    message: "Ids removed succesfully",
  });
});

exports.getReward = catchAsyncError(async (req, res) => {
  console.log(req.body);
  const reward = await User.findById(req.body.id).populate("rewards").exec();
  console.log("this is the reward");
  console.log(reward);
  res.send({
    success: true,
    message: "Ids Got succesfully",
    data: reward,
  });
});

exports.addModerator = catchAsyncError(async (req, res, next) => {
  console.log(req.body);
  const { username, wallet_address } = req.body;
  console.log(username);
  try {
    const user = await User.findOne({ username });
    console.log(user, user.is_moderator);
    if (user.is_moderator) {
      const updatedUser = await User.findOneAndUpdate(
        { wallet_address },
        { is_moderator: true },
        { new: true }
      );
      console.log(updatedUser);
      if (updatedUser) {
        return res.send({
          success: true,
          message: "User added as moderator",
        });
      } else {
        return res.send({
          success: false,
          message: "Invalid wallet address",
        });
      }
    } else {
      return res.send({
        success: false,
        message: "Only moderator can add",
      });
    }
  } catch (e) {
    console.log(e);
    return res.send({
      success: false,
      message: "Error: " + e,
    });
  }
});
