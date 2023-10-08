const User = require('../models/User');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new Error('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    req.user = await User.findById(payload.id).select('-password');
    // { userId: payload.userId, name: payload.name };
    next();
  } catch (error) {
    res.status(401);
    throw new Error('Authentication invalid');
  }
});

module.exports = protect;
