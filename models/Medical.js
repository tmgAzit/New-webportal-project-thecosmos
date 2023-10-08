const mongoose = require('mongoose');

const medicalSchema = new mongoose.Schema({
  child: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Child',
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  evidence: {
    type: String,
  },
  medicineName: {
    type: String,
    required: true,
  },
  instruction: {
    type: String,
  },
});

module.exports = mongoose.model('Medical', medicalSchema);
