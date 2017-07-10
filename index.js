var express = require('express')
var server = express()
var logan = require('./logan.json')

server.get('/logan', function (request,response) {
  response.send('did it')
})


server.listen(8000)
