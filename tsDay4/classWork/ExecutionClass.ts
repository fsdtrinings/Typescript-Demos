import { Project } from "./Project";
import { Employee } from "./Employee";

class ExecutionClass{

 emp1:Employee;
 createEmployee()
 {
    this.emp1 = new Employee('Mike',20000,101);

 }  
 
 allocateProject()
 {
     let p:Project = new Project('BankApp',50);
     this.emp1.setProject(p);
 }

 showEmployeeDetails()
 {
     this.emp1.showEmployeeDetails();
 }

};

let app:ExecutionClass= new ExecutionClass();
app.createEmployee();
app.allocateProject();
app.showEmployeeDetails();