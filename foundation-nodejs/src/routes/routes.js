const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const hbs = require('hbs');
const RegisterModel = require('./../models/registerModel');
const CourseModel = require('./../models/courseModel');
const bcrypt = require('bcrypt');
const multer = require('multer');
require('../helpers/helpers');

// Partials directory
const dirPartials = path.join(__dirname, '../../template/partials');
hbs.registerPartials(dirPartials);

// Engine setup
const dirViews = path.join(__dirname, '../../template/views');
app.set('view engine', 'hbs');
app.set('views', dirViews);
app.set(morgan('dev'));

// Upload use multer middleware
/*var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, 'img' + Date.now() + path.extname(file.originalname))
    }
})*/

var upload = multer({  });

/**
 * Render to index 
 */
app.get('/', (req, res) => {
    res.render('index', {});
});

/**
 * Render to form course
 */
app.get('/form-course', (req, res) => {
    res.render('course/form-course', {});
});

/**
 * Call helper to save-course
 */
app.post('/save-course', upload.single('imagen'), (req, res) => {
    let courseModel = new CourseModel({
        name: req.body.nameCourse,
        description: req.body.description,
        cost: req.body.cost,
        modal: req.body.modal,
        duration: req.body.duration,
        state: req.body.state,
        imagen: req.file.buffer
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
    res.render('register/form-register', {});
});

/**
 * Call helper save-register
 */
app.post('/save-register', (req, res) => {
    const salt = 10;
    let registerModel = new RegisterModel({
        document: req.body.document,
        password: bcrypt.hashSync(req.body.password, salt),
        name: req.body.name,
        email: req.body.email,
        phone: parseInt(req.body.phone),
        delete: false
    });
    registerModel.save((err, result) => {
        console.log(err)
        console.log(result)
        if (err) {
            res.render('register/welcome', {
                showRegister: err
            });
        }
        req.session.userSession = result._id
        req.session.name = result.name
        res.render('register/welcome', {
            showRegister: result.name + ' session ' + req.session.userSession,
            session: true,
            name: req.session.name
        });
    });
});

/**
 * 
 */
app.post('/login', (req, res) => {
    RegisterModel.findOne({ name: req.body.name }, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (!result) {
            return res.render('login', {
                message: "Usuario no esta registrado"
            });
        }
        if (!bcrypt.compareSync(req.body.password, result.password)) {
            return res.render('login', {
                message: "Contraseña no es correcta"
            });
        }
        res.render('login', {
            message: 'Bienvendio ' + result.name
        });
    });
});

/**
 * Render to login form
 */
app.get('/form-login', (req, res) => {
    res.render('login', {});
});

//var hash = bcrypt.hashSync(req.body.name, 10);

/**
 * Render to list of courses
 */
app.get('/list-register', (req, res) => {
    RegisterModel.find({}).exec((err, result) => {
        if (err) {
            return console.log(err)
        }
        res.render('register/list-register', {
            registerList: result
        });
    });
});

/**
 * Delete register
 */
app.post('/delete-register', (req, res) => {
    console.log("Delete")
    RegisterModel.findOneAndDelete({ name: req.body.name }, req.body, (err, result) => {
        if (err) {
            return console.log(err)
        }
        res.render('register/delete-register', {
            name: result.name
        });
    });
});

/**
 * Render to error page
 */
app.get('*', (req, res) => {
    res.render('error', {
        student: 'error'
    })
});

module.exports = app