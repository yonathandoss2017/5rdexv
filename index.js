cmd  = require('node-cmd');
nrc = require('node-run-cmd');
express = require('express');
bodyParser = require('body-parser')
assert = require('assert');
var morgan = require('morgan');
var app = express();
var route = require('./route/Router');
app.use(morgan('dev'));
app.use('/router',Router);

app.use(express.static(__dirname + '/public'));

app.listen(1337, '82.180.173.121', function(){
  console.log(`Server draait op: YOURIP:4444`);
});

