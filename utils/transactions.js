const Account = require('../models/accountModel');

exports.calculate = async (name, amt, accId) => {
  const account = await Account.findById(accId);

  if (!account) return 'Error';

  let accountBalance = account.balance;

  if (name === 'withdrawal') {
    accountBalance -= amt;
    await Account.findByIdAndUpdate(
      accId,
      { balance: accountBalance },
      {
        runValidators: true,
      }
    );
    return 'successfull';
  }
  if (name === 'deposit') {
    accountBalance += amt;
    await Account.findByIdAndUpdate(
      accId,
      { balance: accountBalance },
      {
        runValidators: true,
        new: true,
      }
    );
    return 'successfull';
  }
};
