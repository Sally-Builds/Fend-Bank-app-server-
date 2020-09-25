const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      enum: ['deposit', 'withdrawal'],
      required: [true, 'Please input a transaction type'],
    },
    amount: {
      type: Number,
      required: [true, 'Please Enter amount to send'],
    },
    description: {
      type: String,
      default: 'No description',
    },
    date: {
      type: Date,
      default: new Date(),
    },
    account: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'You must enter an account to perform a transaction'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
