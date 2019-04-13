const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const registerSchema = new Schema({
    document: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    delete: {
        type: Boolean
    }    
});

const RegisterModel = mongoose.model('RegisterModel', registerSchema);

module.exports = RegisterModel;
