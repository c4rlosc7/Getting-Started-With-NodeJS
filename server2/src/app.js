var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser')
require('./helpers');

const publicDir = path.join(__dirname, '../public');
const partialsDir = path.join(__dirname, '../partials');

app.use(express.static(publicDir));
hbs.registerPartials(partialsDir);
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        student: 'Carlos'
    });
});

app.post('/average', (req, res) => {
    console.log(req.body)
    res.render('calc', {
        student: req.body.name,
        note1: parseInt(req.body.note1),
        note2: parseInt(req.body.note2),
        note3: parseInt(req.body.note3)
    });
});

app.get('*', (req, res) =>{
    res.render('error', {
        student: 'error'
    })
});

// console.log(__dirname)

app.listen(3000, () => {
    console.log('Listen to port 3000');
});