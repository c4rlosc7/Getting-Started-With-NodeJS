const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { PORT } = require('./config/config');
require('./helpers/helpers');

// Public directory
const dirPublic = path.join(__dirname, '../public');
app.use(express.static(dirPublic));

// Bootstrap jquery popper.js
const dirNodeModules = path.join(__dirname, '../node_modules')
app.use('/css', express.static(dirNodeModules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNodeModules + '/jquery/dist'));
app.use('/js', express.static(dirNodeModules + '/popper.js/dist'));
app.use('/js', express.static(dirNodeModules + '/bootstrap/dist/js'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/routes'));

// Connect to mongo db
mongoose.connect('mongodb://localhost:27017/db_node_uda', { useNewUrlParser: true }, (err, result) =>{
    if (err) {
        return console.log(err)
    }
    console.log('Connect to mongodb')
})

// Listen on port
app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});
