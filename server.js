var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './client')));

// parse application/json
app.use(bodyParser.json())

// get all messages route

io.on('connection', function(socket){
  console.log("you have socket connection");
  socket.on('chat message', function(msg){
    // place "CREATE message to database" route here
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log(`tinyChat listening on port: ${port}`);
});
