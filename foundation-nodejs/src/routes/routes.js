var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var RegisterModel = require('./../models/registerModel');
var CourseModel = require('./../models/courseModel');
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
    let courseModel = new CourseModel({
        name: req.body.nameCourse,
        description: req.body.description,
        cost: req.body.cost,
        modal: req.body.modal,
        duration: req.body.duration,
        state: req.body.state
    })
    courseModel.save((err, result) => {
        if (err) {
            res.render('course/list-courses', {
                showCourse: err
            });
        }
        res.render('course/list-courses', {
            showCourse: result
        });        
    })
});

/**
 * Render to list of courses
 */
app.get('/list-courses', (req, res) => {
    CourseModel.find({}).exec((err, result) => {
        console.log(result)
        if (err) {
            return console.log(err)
        }
        res.render('course/list-courses', {
            courseList: result
        });             
    });
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
    let registerModel = new RegisterModel({
        document: req.body.document,
        name: req.body.name,
        email: req.body.email,
        phone: parseInt(req.body.phone),
        delete: false
    })
    registerModel.save((err, result) => {
        if (err) {
            res.render('register/list-register', {
                showRegister: err
            });
        }
        res.render('register/list-register', {
            showRegister: result
        });
    })
});

/**
 * Render to list of courses
 */
app.get('/list-register', (req, res) => {
    RegisterModel.find({}).exec((err, result) => {
        if (err) {
            return console.log(err)
        }
        res.render('register/list-register', {
            registerList : result
        });
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

module.exports = app