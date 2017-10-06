//houses code to interact with MongoDB and create collections and their properties
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentRes = new Schema({
    surname: {
        type: string,
        required: 'Surname is required!'
    },
    midname: {
        type: string
    },
    firstname: {
        type: string,
        required: 'First name is required!'
    },
    regno:{
        type: string,
        unique: true,
        required: 'Registration number is required!'
    },
    image:{
        type: string
    },
    stateoforigin:{
        type: string,
        required: 'State of origin is required!'
    },
    dob:{
        type: Date,
        required: 'Date of birth is required!'
    },
    department:{
        type: string,
        required: 'Department is required!'
    },
    level: {
        type: string,
        required: 'Level is required!'
    }
});

module.exports = mongoose.model('StudentRes', StudentRes);