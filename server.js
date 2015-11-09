// Serving static files
var fs = require('fs');

// Utility modules
var http = require('http');
var express = require('express');
var url = require('url');

// Using MySQL Database
var mysql = require('mysql');

// File storing all configuration options.
var config = require('./config');

// Home page
var home = require('./home');

// New Post page
var newPost = require('./newPost');

// Post Discussion page.
var comments = require('./comments');

// Forum posts search results page.
var search = require('./search');

// Login page
var login = require('./login');

// Account registration / user creation page.
var register = require('./register');

// User profile page.
var user = require('./user');

// Internal utility functions.
var utils = require('./utils');


var app = express();

// Serve static files
app.use(express.static("resources"));

// Different URLs
app.get('/login', login.handleReq);
app.get('/register', register.handleReq);
app.get('/user/:uid(\\d+)', user.handleReq);
app.get('/post/:pid(\\d+)', newPost.handleReq);
app.get('/post/:pid(\\d+)/:cid(\\d+)', comments.handleReq);
app.get('/', home.handleReq);

app.post('/newPost', newPost.handleNewPost);
app.post('/comments', comments.handleNewComment);
app.post('/login', login.handleLogin);
app.post('/register', register.handleNewUser);
app.post('/search', search.handleReq);
app.post('/user', user.handleUserChanges);

app.listen(config.openPort);
