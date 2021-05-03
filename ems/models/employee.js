var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({
    firstName: { type: String, required: true, unique: true},
    lastName: { type: String, required: true, unique: true},

});

// define the employee model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the employee to calling files

module.exports = Employee;