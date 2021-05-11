import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../interface/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Array<any> = [];
  employee: Employee = {
    name:'',
    salary:0,
    department: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (data: any) => {
        this.employees = data;
        console.log(this.employees);
      }

    );
  }

  
  
}
