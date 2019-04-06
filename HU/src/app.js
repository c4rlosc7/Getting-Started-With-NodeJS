var express = require('express');
var path = require('path');
var app = express();
var hbs = require('hbs');
var bodyParser = require('body-parser')
require('./helpers');

// Public directory
const dirPublic = path.join(__dirname, '../public');
app.use(express.static(dirPublic));

// Partials directory
const dirPartials = path.join(__dirname, '../partials');
hbs.registerPartials(dirPartials);

// Bootstrap jquery popper.js
const dirNodeModules = path.join(__dirname , '../node_modules')
app.use('/css', express.static(dirNodeModules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNodeModules + '/jquery/dist'));
app.use('/js', express.static(dirNodeModules + '/popper.js/dist'));
app.use('/js', express.static(dirNodeModules + '/bootstrap/dist/js'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Engine setup
app.set('view engine', 'hbs');

// Set port:3000
app.set('port', (process.env.PORT || 3000));

/**
 * Render to index 
 */
app.get('/', (req, res) => {
    res.render('index', { });
});

/**
 * Render to form course
 */
app.get('/form-course', (req, res) => {
    res.render('course/form-course', { });
});

/**
 * Call helper to save-course
 */
app.post('/save-course', (req, res) => {
    console.log(req.query)
    console.log("********************")
    res.render('course/list-courses', {
        id: 5,
        name: 'java',
        description: 'este curso base de java',
        cost: 120.000,
        modal: 'presencial',
        duration: 24,
        state: 'disponible'
    });
});
/*
        name: req.body.name,
        description: req.body.description,
        cost: parseInt(req.body.cost),
        modal: req.body.modal,
        duration: parseInt(req.body.duration),
        state: req.body.state
*/

/**
 * Render to list of courses
 */
app.get('/list-courses', (req, res) => {
    res.render('course/list-courses', { });
});

/**
 * Render to form register
 */
app.get('/form-register', (req, res) => {
    res.render('register/form-register', { });
});

/**
 * Call helper save-register
 */
app.post('/save-register', (req, res) => {
    res.render('register/list-register', {
        name: req.body.name,
        description: req.body.description,
        cost: parseInt(req.body.cost),
        modal: req.body.modal,
        duration: parseInt(req.body.duration),
        state: req.body.state
    });
});

/**
 * Render to list of courses
 */
app.get('/list-register', (req, res) => {
    res.render('register/list-register', { });
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
app.listen(app.get('port'), function(){
    console.log('Server started on port:' + app.get('port'));
});
