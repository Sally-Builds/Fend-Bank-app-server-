const express = require('express');
const authController = require('../controller/authController');
const accountController = require('../controller/accountController');

const router = express.Router();

router.use(authController.protect);

router.route('/').post(accountController.createAccount);

router.route('/:id').get(accountController.getAccount);

module.exports = router;
