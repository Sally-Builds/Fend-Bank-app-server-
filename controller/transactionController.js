const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Transaction = require('../models/transactionModel');
const { calculate } = require('../utils/transactions');

//fiter the data the user can send
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.createTransaction = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(
    req.body,
    'name',
    'amount',
    'description',
    'date'
  );
  filteredBody.account = req.user.account.id;

  //1) Check if the request amount is larger than the balance in the account
  if (filteredBody.name === 'withdrawal') {
    if (req.user.account.balance < filteredBody.amount) {
      return next(new AppError('Insufficient funds!', 400));
    }
  }
  //2) subtract or add depending if req name is deposit or withdrawal
  await calculate(filteredBody.name, filteredBody.amount, filteredBody.account);

  //3) if all is successfull then create the transaction

  const transaction = await Transaction.create(filteredBody);

  res.status('200').json({
    status: 'success',
    data: transaction,
  });
});
