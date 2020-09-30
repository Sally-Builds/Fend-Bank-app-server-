const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Account = require('../models/accountModel');
const pusher = require('../utils/pusher');

//create account
exports.createAccount = catchAsync(async (req, res, next) => {
  if (req.body.user) req.body.user = null;
  req.body.user = req.user.id;
  const account = await Account.create(req.body);
  //update the user account
  await account.updateUserAccount(account.id, account.user);

  pusher.trigger('account', 'createAccount', {
    data: {
      account,
    },
  });

  res.status(201).json({
    status: 'success',
    data: {
      account,
    },
  });
});

exports.getAccount = catchAsync(async (req, res, next) => {
  //prevent another user from accessing another persons account
  if (req.user.account.id !== req.params.id) {
    return next(new AppError('Access denied', 400));
  }
  const account = await Account.findById(req.params.id);

  if (!account) return next(new AppError('No account found with that id', 400));

  pusher.trigger('account', 'getAccount', {
    data: {
      account,
    },
  });

  res.status(200).json({
    status: 'success',
    data: account,
  });
});
