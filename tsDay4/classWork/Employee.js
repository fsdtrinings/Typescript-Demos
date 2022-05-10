"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(employeName, salary, empId) {
        this.projects = [];
        this.employeName = employeName;
        this.salary = salary;
        this.empId = empId;
    }
    Employee.prototype.setProject = function (project) {
        if (this.salary > 15000) {
            this.projects.push(project);
        }
        else {
            console.log("Cannot work on Project");
        }
    };
    Employee.prototype.showEmployeeDetails = function () {
        console.log(this.employeName + " - " + this.empId + " - " + this.salary);
        this.projects.forEach(function (p) {
            console.log(p);
        });
    };
    return Employee;
}()); //end class
exports.Employee = Employee;
