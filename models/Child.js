const mongoose = require('mongoose');

const childSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Parents: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  age: {
    type: Number,
    default: 0,
  },
  contact: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
  },
  relative: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
    },
  ],
  history: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medical',
  },
  absent: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Child', childSchema);
