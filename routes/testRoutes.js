const express = require('express');
const authController = require('../controller/authController');
const testController = require('../controller/testController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .post(testController.createTest)
  .get(testController.getAllTests);

module.exports = router;
