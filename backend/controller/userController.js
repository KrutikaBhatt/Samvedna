const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.signup = catchAsyncError(async (req, res, next) => {
	console.log(req.body);
	if (!req.body.username) {
		res.send({
			success: false,
			message: "Username is required",
		});
	} 
    else if (!req.body.wallet_address) {
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
		} 
        else if (takenWalletAddress) {
			return res.send({
				success: false,
				message: "Wallet addresss has already been taken",
			});
		} 
        else {
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
	User.findOne({ 'wallet_address': wallet_address
     }).then((dbUser) => {
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
