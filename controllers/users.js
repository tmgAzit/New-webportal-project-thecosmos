const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, image } = req.body;
  // check if email exists already
  const userExists = await User.findOne({ email });
  // throw error when exists
  if (userExists) {
    res.status(400);
    throw new Error(` Your email already exists. `);
  }
  const user = await User.create({
    name,
    email,
    password,
    image,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Error Occured!');
  }
});

// Login/Authorize User
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // find user in the database
  const user = await User.findOne({ email });
  // when found, compare the password
  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      image: user.image,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid email or password!');
  }
});

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(201).json({ users });
};

const getUser = async (req, res, next) => {
  const { id: userID } = req.params;
  const user = await User.findOne({ _id: userID });
  if (!user) {
    throw new Error(`No task with id: ${userID}`);
  }
  res.status(200).json({ user });
};

const deleteUser = async (req, res) => {
  const { id: userID } = req.params;
  const user = await User.findOneAndDelete({ _id: userID });
  if (!user) {
    throw new Error(`No task with id: ${userID}`);
  }
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const { id: userID } = req.params;
  const user = await User.findOneAndUpdate({ _id: userID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    throw new Error(`No task with id: ${userID}`);
  }
  res.status(200).json({ user });
};
module.exports = {
  registerUser,
  authUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
