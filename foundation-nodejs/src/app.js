const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const { PORT, PORT_URLDB } = require('./config/config');
var MemoryStore = require('memorystore')(session)
require('./helpers/helpers');

// Public directory
const dirPublic = path.join(__dirname, '../public');
app.use(express.static(dirPublic));

// Bootstrap jquery popper.js
const dirNodeModules = path.join(__dirname, '../node_modules')
app.use('/css', express.static(dirNodeModules + '/bootstrap/dist/css'));
app.use('/css', express.static(dirNodeModules + '/font-awesome/css'));
app.use('/js', express.static(dirNodeModules + '/jquery/dist'));
app.use('/js', express.static(dirNodeModules + '/popper.js/dist'));
app.use('/js', express.static(dirNodeModules + '/bootstrap/dist/js'));

// Session
app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// Midleware session
app.use((req, res, next) => {
    if (req.session.name) {
        res.locals.session = true;
        res.locals.id = req.session.id;
    }
    next()
});

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/routes'));

// Connect to mongo db
mongoose.connect(PORT_URLDB, { useNewUrlParser: true }, (err, result) => {
    if (err) {
        return console.log(err)
    }
    console.log('Connect to mongodb')
})

// Listen on port
app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});
