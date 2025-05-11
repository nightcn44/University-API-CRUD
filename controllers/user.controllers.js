const User = require("../models/user");
const hashPassword = require("../utils/hashPassword");
// const validatePassword = require("../utils/validatePassword");
// const { generateToken } = require("../utils/jwtUtils");

exports.createUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existing = await User.findOne({ username });
    if (existing) {
      return res.status(400).json({ message: "Username is already in use" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.find({}).exec();
    res.status(200).json(Users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await user.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error");
  }
};

exports.updateUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json("Internal server error");
  }
};

exports.deleteUserById = async (req, res) => {
  const userId = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json("Internal server error");
  }
};
