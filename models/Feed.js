const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    like: { type: Number, default: 0 },
    comment: [{ body: String, date: Date }],
    publishDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Feed', feedSchema);
