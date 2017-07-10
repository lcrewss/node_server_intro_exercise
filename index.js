var express = require('express')
var server = express()
var logan = require('./logan.json')

server.get('/Logan', function (request,response) {
  response.json(logan)
})

server.get('/contact', function(request, response){
  response.send('call me maybe')
})

server.get('*', function(request, response){
  response.status(404)
  response.send('Dude,Wrong page')
})

server.listen(8000)
