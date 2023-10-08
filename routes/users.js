const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.route('/register').post(registerUser);
router.route('/login').post(authUser);

router.route('/').get(getAllUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
