const { result } = require('./average');
var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('<h1>El promedio es: '+ result + '</h1>')
})
 
app.listen(3000)
