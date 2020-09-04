var express = require('express')
var app = express()
var mongoose = require('mongoose')
var config = require('./config')
var apiController = require('./controller/apiController')
var port = process.env.PORT || 5001

apiController(app)
app.listen(port)