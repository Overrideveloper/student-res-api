//houses code to interact with MongoDB and create collections and their properties
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    surname: {
        type: String,
        required: 'Surname is required!'
    },
    midname: {
        type: String
    },
    firstname: {
        type: String,
        required: 'First name is required!'
    },
    regno:{
        type: String,
        unique: true,
        required: 'Registration number is required!'
    },
    image:{
        type: String
    },
    stateoforigin:{
        type: String,
        required: 'State of origin is required!'
    },
    dob:{
        type: String,
        required: 'Date of birth is required!'
    },
    department:{
        type: String,
        required: 'Department is required!'
    },
    level: {
        type: String,
        required: 'Level is required!'
    }
});

module.exports = mongoose.model('Students', StudentSchema);