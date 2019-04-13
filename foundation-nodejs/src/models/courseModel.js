const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    cost: {
        type: Number
    },
    modal: {
        type: String
    },
    duration: {
        type: Number
    },
    state: {
        type: String
    }
});

const CourseModel = mongoose.model('CourseModel', courseSchema);

module.exports = CourseModel;
