import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }

  getEmployee(id: number | string) {
    return this.getEmployees().pipe(
      map((employees: Employee[]) => employees.find(employee => employee.id === +id))
    );
  }
}
