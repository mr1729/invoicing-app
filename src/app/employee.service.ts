import { Injectable } from '@angular/core';
import { Employee } from './shared/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:Employee[];

  constructor() { 
    this.employees = [];
  }

  getEmployees():Employee {
    
    return new Employee();
  }

  addEmployee(emp:Employee):void{
    this.employees.concat(emp);
  }


}
