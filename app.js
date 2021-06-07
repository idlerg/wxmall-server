var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require("body-parser")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 后台登录
var backUserRouter = require('./routes/back_user');
var testRouter = require('./routes/test');

var app = express();
// 解决跨域
// app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); 
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization'); 
  // res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
// 后台登录
app.use('/backuser', backUserRouter)
app.use('/test', testRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
