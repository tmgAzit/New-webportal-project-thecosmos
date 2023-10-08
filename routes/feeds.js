const express = require('express');
const router = express.Router();

const { uploadFeedPhoto } = require('../controllers/uploadFeedPhoto');
const {
  showFeeds,
  createFeed,
  specificFeed,
  deleteFeed,
} = require('../controllers/feeds');

// all feeds route
router.route('/feeds').get(showFeeds);

// post the feed route
router.route('/feed').post(createFeed);

// get the login user feeds route
router.route('/feed/:id').get(specificFeed);

// delete feed route
router.route('/feed/:id').delete(deleteFeed);

router.route('/feed/upload').post(uploadFeedPhoto);

module.exports = router;
