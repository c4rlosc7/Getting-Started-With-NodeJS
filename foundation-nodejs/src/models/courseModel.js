/**
 * https://mongoosejs.com/docs/schematypes.html
 * All Schema Types
required: boolean or function, if true adds a required validator for this property
default: Any or function, sets a default value for the path. If the value is a function, the return value of the function is used as the default.
select: boolean, specifies default projections for queries
validate: function, adds a validator function for this property
get: function, defines a custom getter for this property using Object.defineProperty().
set: function, defines a custom setter for this property using Object.defineProperty().
alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets this path.
 */
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
        type: Number,
        default: 12,
        min: 0,
        max: 100
    },
    state: {
        type: String,
        default: "Disponible"
    },
    imagen: {
        type: Buffer,
        required: true
    }
});

const CourseModel = mongoose.model('CourseModel', courseSchema);

module.exports = CourseModel;
