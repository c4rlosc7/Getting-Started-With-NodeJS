var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
require('./helpers');
 
const publicDir = path.join(__dirname, '../public');
const partialsDir = path.join(__dirname, '../partials');

app.use(express.static(publicDir));
hbs.registerPartials(partialsDir);

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        student: 'Carlos'
    });
});

app.get('/calc', (req, res) => {
    res.render('calc', {
        student: 'Andres',
        note1: 3,
        note2: 3,
        note3: 3
    });
});

// console.log(__dirname)

app.listen(3000, () => {
    console.log('Listen to port 3000');
});