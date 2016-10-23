var jsonServer = require('json-server');
var db = require('./db');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var validate = require('express-validation');
var validations = require('./validations');

var jwtSecret = 'JWT_SECRET';

var user = {
  email: 'user@example.com',
  password: 'secret'
};

var app = jsonServer.create();

app.use(cors());
app.use(bodyParser.json());
// app.use(expressJwt({secret: jwtSecret}).unless({path: ['/login']}));

app.post('/login', authenticate, function (req, res) {
  var token = jwt.sign({email: user.email}, jwtSecret);
  res.send({token: token, user: user});
});

app.post('/categories', validate(validations.category), function(req, res, next){
  next();
});

app.put('/categories/:id', validate(validations.category), function(req, res, next){
  next();
});

app.post('/posts', validate(validations.post), function(req, res, next){
  next();
});

app.put('/posts/:id', validate(validations.post), function(req, res, next){
  next();
});

app.get('/me', function (req, res) {
  res.send(req.user);
});

app.use(jsonServer.router(db));
app.use(jsonServer.defaults());

app.listen(8081);

function authenticate(req, res, next) {
  var body = req.body;
  console.log(body)
  if (!body.email || !body.password) {
    res.status(400).end('Must provide email and password');
  } else if (body.email !== user.email || body.password !== user.password) {
    res.status(401).end('Email or password incorrect');
  } else {
    next();
  }
}
