const Feed = require('../models/Feed');
const asyncHandler = require('express-async-handler');

// show all feeds in feed section
const showFeeds = asyncHandler(async (req, res) => {
  const feeds = await Feed.find({}).sort({ createdAt: -1 });
  res.status(201).json(feeds);
});

//Post Feed
const createFeed = asyncHandler(async (req, res) => {
  const { description, photo } = req.body;

  if (!description || !photo) {
    res.status(400);
    throw new Error(`Please fill all the fields!`);
  } else {
    const feed = new Feed({
      createdBy: req.user._id,
      description,
      photo,
    });
    const createdFeed = await feed.save();
    res.status(201).json(createdFeed);
  }
});

// get specific feed
const specificFeed = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const feed = await Feed.findById(id);
  if (feed) {
    res.status(201).json(feed);
  } else {
    res.status(400);
    throw new Error('No such feed with ${id}');
  }
});

//delete specific feed
const deleteFeed = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deleteFeed = await Feed.findOneAndDelete({ _id: id });
  if (deleteFeed) {
    res.status(201).json(deleteFeed);
  } else {
    throw new Error(`There is no feed with such id: ${id}`);
  }
});

module.exports = { showFeeds, createFeed, specificFeed, deleteFeed };
