import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  

  apiUrl = 'http://localhost:8080'; 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.httpClient.get(this.apiUrl + '/api/v1/employees');
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(this.apiUrl + '/api/v1/employees', JSON.stringify(employee), this.httpOptions);
  }

}
