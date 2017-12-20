const express = require('express');
const path = require('path');

module.exports = function(app) {

    var router = express.Router();
    
    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/../client/views/home.html'));
    });

    router.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname + '/../client/views/home.html'));
    });

    router.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname + '/../client/views/login.html'));
    });

     router.get('/submit', function(req, res) {
        res.sendFile(path.join(__dirname + '/../client/views/submit.html'));
    });

     router.get('/signup', function(req, res) {
        res.sendFile(path.join(__dirname + '/../client/views/signup.html'));
    });

    app.use(router);

};
