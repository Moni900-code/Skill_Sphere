const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Session', SessionSchema);

