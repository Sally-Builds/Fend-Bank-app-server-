const Test = require('../models/testModel');
const pusher = require('../utils/pusher');
const catchAsync = require('../utils/catchAsync');

//create Blog
exports.createTest = catchAsync(async (req, res, next) => {
  const test = await Test.create(req.body);

  pusher.trigger('test', 'createTest', {
    data: {
      test,
    },
  });

  res.status(201).json({
    status: 'success',
  });
});

exports.getAllTests = catchAsync(async (req, res, next) => {
  const tests = Test.find();
  pusher.trigger('test', 'getAllTests', {
    results: tests.length,
    data: {
      tests,
    },
  });

  res.status(200).json({
    status: 'success',
  });
});
