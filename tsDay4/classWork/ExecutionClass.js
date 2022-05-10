"use strict";
exports.__esModule = true;
var Project_1 = require("./Project");
var Employee_1 = require("./Employee");
var ExecutionClass = /** @class */ (function () {
    function ExecutionClass() {
    }
    ExecutionClass.prototype.createEmployee = function () {
        this.emp1 = new Employee_1.Employee('Mike', 20000, 101);
    };
    ExecutionClass.prototype.allocateProject = function () {
        var p1 = new Project_1.Project('BankApp', 50);
        this.emp1.setProject(p1);
        var p2 = new Project_1.Project('Mail App', 50);
        this.emp1.setProject(p2);
        var p3 = new Project_1.Project('Msg App', 50);
        this.emp1.setProject(p3);
    };
    ExecutionClass.prototype.showEmployeeDetails = function () {
        this.emp1.showEmployeeDetails();
    };
    return ExecutionClass;
}());
;
var app = new ExecutionClass();
app.createEmployee();
app.allocateProject();
app.showEmployeeDetails();
