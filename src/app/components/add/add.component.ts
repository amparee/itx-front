import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  employee: Employee = {
    name:'',
    salary:0,
    department: ''
  };

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee(employee: Employee){
    return this.employeeService.addEmployee(this.employee);
  }

}
