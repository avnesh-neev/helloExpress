var express = require('express')
  , fs = require('fs')
  , passport = require('passport');
//var path = require('path');


//Load configurations

var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env]
  , mongoose = require('mongoose')
  , passport = require('passport')

//Bootstrap db connection
//connect to mongoDB

var connect = function() {
  var options = {server:{socketOptions: {keepAlive: 1}}}
  mongoose.connect(config.db, options)
}
connect();

//Error Handler
mongoose.connection.on('error',function(err){
  console.log(err);
});

//Reconnect when closed
mongoose.connection.on('disconnected',function(){
  connect();
});

//Bootstrap models

var models_path = __dirname + '/app/models'
console.log('bootstraping models....');
fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) {
    console.log('   '+models_path+'/'+file)
    require(models_path + '/' + file)
  } })

//bootstrap passport config
//require('./config/passprt')(passport.config)

var app = express();
//express settings
//require('./config/express')(app, config, passport)
require('./config/express')(app, config, passport)

//configure passport
//require('./config/passport')(passport, config)
require('./config/passport')(passport)

//Bootstrap routes
require('./config/routes')(app, passport, config)


//Start the app by listening on <port>
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Magic starts here '+ port);

// expose app
module.exports = app;
