/*
In this controller, there would be five(5) different functions namely:
list_students, create_student, read_student, update_student, delete_student.
Each of the functions will be expected for use in the routes.
Each of these functions uses different mongoose methods such as find, findById, findOneAndUpdate, save and remove.
*/

'use strict';

var mongoose = require('mongoose'),
    Student = mongoose.model('Students');

exports.list_students = function(req, res){
    Student.find({}, function(err, student){
        if(err)
            res.send(err);
        res.json(student);
    });
};

exports.create_student = function(req, res){
    var new_student = new Student(req.body);
    new_student.save(function(err, student){
        if(err)
            res.send(err);
        res.status(201);
        res.json(student);
    });
};

exports.read_student = function(req, res){
    Student.findById({ _id : req.params.studentId }, function(err, student){
        if(err)
            res.send(err);
        res.json(student);
    });
};

exports.update_student = function(req, res){
    Student.findOneAndUpdate({ _id : req.params.studentId }, req.body, { new: true }, function(err, student){
        if(err)
            res.send(err);
        res.json(student);
    });
};

exports.delete_student = function(req, res){
    Student.remove({ _id : req.params.studentId }, function(err, student){
        if(err)
            res.send(err);
        res.json({ message: 'Student successfuly removed!'});
    });
};