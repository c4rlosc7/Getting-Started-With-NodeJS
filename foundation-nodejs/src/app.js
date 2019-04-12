var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')
require('./helpers/helpers');

// Public directory
const dirPublic = path.join(__dirname, '../public');
app.use(express.static(dirPublic));

// Bootstrap jquery popper.js
const dirNodeModules = path.join(__dirname , '../node_modules')
app.use('/css', express.static(dirNodeModules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNodeModules + '/jquery/dist'));
app.use('/js', express.static(dirNodeModules + '/popper.js/dist'));
app.use('/js', express.static(dirNodeModules + '/bootstrap/dist/js'));

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/index'));

// Set port:3000
const PORT = process.env.PORT || 3004;

// console.log(__dirname)
app.listen(PORT, () => {
    console.log('Server started on port:' + PORT);
});
