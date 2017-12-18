const express = require('express');
const app = express();
const http = require('http');
const mysql = require('mysql');

var server = http.createServer(app);
var io = require('socket.io').listen(server);

var socketServer = io.listen(server, { "Log level": 1 });

//Connection a la base de données
const connection = mysql.createConnection({

    //*********************PHPMYADMIN */
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'transcode'
});
connection.connect();

/*
test de changement
 */

app.set('port', (process.env.PORT || 5000));


app.use(express.static(__dirname + '/client'));

require('./server/route.js')(app);

server.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});