var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './client')));

// parse application/json
app.use(bodyParser.json())

app.post('/message', (req, res) => {
  console.log('inside post');
  console.log(`req.body.newMessage = ${req.body.newMessage}`);
  res.status(200).send('works');
})

app.listen(port, () => {
  console.log(`tinyChat listening on port: ${port}`);
})
