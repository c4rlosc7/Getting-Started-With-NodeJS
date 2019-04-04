var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var bodyParser = require('body-parser')
require('./helpers');

const publicDir = path.join(__dirname, '../public');
const partialsDir = path.join(__dirname, '../partials');
const dirNode_modules = path.join(__dirname , '../node_modules')

// Public directory
app.use(express.static(publicDir));
// Partials directory
hbs.registerPartials(partialsDir);
// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Bootstrap jquery popper.js
app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));

app.set('view engine', 'hbs');

/**
 * Render to index 
 */
app.get('/', (req, res) => {
    res.render('index', { });
});

/**
 * Render to list of courses
 */
app.get('/list-courses', (req, res) => {
    res.render('list-courses', { });
});

/**
 * Render to list of courses
 */
app.get('/list-register', (req, res) => {
    res.render('list-register', { });
});

/**
 * Render to form course
 */
app.get('/form-course', (req, res) => {
    res.render('form-course', { });
});

/**
 * Call helper to save-course
 */
app.post('/save-course', (req, res) => {
    console.log(req.body)
    console.log("GUARDAR")
    res.render('list-courses', {
        name: req.body.name,
        description: req.body.description,
        cost: parseInt(req.body.cost),
        modal: req.body.modal,
        duration: parseInt(req.body.duration),
        state: req.body.state
    });
});

/**
 * Render to form register
 */
app.get('/form-register', (req, res) => {
    res.render('form-register', { });
});

/**
 * Call helper save-register
 */
app.post('/save-register', (req, res) => {
    res.render('list-register', {
        name: req.body.name,
        description: req.body.description,
        cost: parseInt(req.body.cost),
        modal: req.body.modal,
        duration: parseInt(req.body.duration),
        state: req.body.state
    });
});

/**
 * Render to error page
 */
app.get('*', (req, res) =>{
    res.render('error', {
        student: 'error'
    })
});

// console.log(__dirname)

app.listen(3000, () => {
    console.log('Listen to port 3000');
});