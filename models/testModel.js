const mongoose = require('mongoose');

const testSchema = new mongoose.Schema(
  {
    balance: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      required: [true, 'please input a name'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
