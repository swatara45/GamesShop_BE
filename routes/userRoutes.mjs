
import express from "express";
import User from "../models/userSchema.mjs";
import Cart from "../models/cartSchema.mjs";

const router = express.Router();

// @route: POST /api/user/register
// @desc: register user route
// @access: Public
router.post("/register", async (req, res) => {
//Destructure the req.body (opt)
const { username, email, password } = req.body;

// Check user submitted all necessary data, if not return
if (!username || !email || !password) {
return res.status(400).json({ msg: "All fields are required." });
}

// Check if user already exists
let user = await User.findOne({ email });
// If exists, return with error
if (user) {
return res.status(400).json({ msg: "Email Already Exists" });
}

// Create a new user, do not save to DB just yet
user = new User({ username, email, password });

//Save user to create unique mongoDB _id
await user.save();

// Create users cart, pass in userID for user Property
const cart = new Cart({ user: user._id, items: [] });
// Save cart to DB, to create unique mongoDB _id for cart
await cart.save();

//update user with cart ID reference, and save
user.cart = cart._id;
await user.save();

res.status(201).json({ userId: user._id, cartId: cart._id });
});

export default router;
