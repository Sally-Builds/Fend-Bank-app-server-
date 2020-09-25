const mongoose = require('mongoose');
const User = require('./userModel');

const accountSchema = new mongoose.Schema(
  {
    balance: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      required: [true, 'This account must belong to a user'],
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

accountSchema.methods.updateUserAccount = async function (accId, userId) {
  await User.findByIdAndUpdate(userId, { account: accId });
};

accountSchema.virtual('transactions', {
  ref: 'Transaction',
  foreignField: 'account',
  localField: '_id',
});

// populate account on find
accountSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'transactions',
    select: '-__v',
  });
  next();
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
