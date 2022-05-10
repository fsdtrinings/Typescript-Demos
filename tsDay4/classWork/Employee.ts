import { Project } from "./Project";

export class Employee
{
    employeName:string;
    salary:number;
    empId:number;
    projects:Project[] = [];

    constructor(employeName:string,salary:number,empId:number)
    {
        this.employeName=employeName;
        this.salary=salary;
        this.empId=empId;
    }

    setProject(project:Project)
    {
        if(this.salary> 15000)
        {
            this.projects.push(project);
        }
        else{
            console.log("Cannot work on Project");
        }
    }


    showEmployeeDetails():void
    {
        console.log(this.employeName+" - "+this.empId+" - "+this.salary);
        this.projects.forEach(p=>{
            console.log(p);
        })
    }

    

}//end class