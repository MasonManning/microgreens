var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config/index')
var apiController = require('./controller/apiController')
var port = process.env.PORT || 5001
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
mongoose.connect(config.getDbConnectionString())
apiController(app)
app.listen(port)