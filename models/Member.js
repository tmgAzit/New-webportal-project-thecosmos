const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Family: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Child,
  },
  relation: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
  },
});

module.exports = mongoose.model('Member', memberSchema);
