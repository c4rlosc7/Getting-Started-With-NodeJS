var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
require('../helpers/helpers');

// Partials directory
const dirPartials = path.join(__dirname, '../../template/partials');
hbs.registerPartials(dirPartials);

// Engine setup
const dirViews = path.join(__dirname, '../../template/views');
app.set('view engine', 'hbs');
app.set('views',dirViews);

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
    res.render('course/list-courses', {
        name: req.body.nameCourse,
        description: req.body.description,
        cost: req.body.cost,
        modal: req.body.modal,
        duration: req.body.duration,
        state: req.body.state
    });
});

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
        document: req.body.document,
        name: req.body.name,
        email: req.body.email,
        phone: parseInt(req.body.phone)
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

module.exports = app