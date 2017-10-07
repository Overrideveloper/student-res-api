/* Routing refers to determining how an application responds to a client request for a specific endpoint,
which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each of our routes has different route handler functions, which are executed when the route is matched.
Below we have defined two basic routes(‘/students’, and ‘/students/:studentId’) with different methods
‘/students has to methods(‘GET’ and ‘POST’), while ‘/students/:studentId’ has GET, PUT and DELETE.
As you can see, we required the controller so each of the routes methods can call it’s respective handler function */

'use strict';
module.exports = function(app) {
    var studentRes = require('../controllers/studentResController');

    //Routes
    app.route('/students')
        .get(studentRes.list_students)
        .post(studentRes.create_student);

    app.route('/students/:studentId')
        .get(studentRes.read_student)
        .put(studentRes.update_student)
        .delete(studentRes.delete_student);
};