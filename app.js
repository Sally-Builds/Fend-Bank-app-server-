const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const userRouter = require('./routes/userRoutes');
const accountRouter = require('./routes/accountRoutes');
const transactionRouter = require('./routes/transactionRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//middleware
// 1) Global middleware
app.use(cors());

app.options('*', cors());

//body parser, reading data from body into req.body
app.use(express.json());
app.use(cookieParser());

//compress responses and request
app.use(compression());

//testing middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//serving static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/accounts', accountRouter);
app.use('/api/v1/transactions', transactionRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
