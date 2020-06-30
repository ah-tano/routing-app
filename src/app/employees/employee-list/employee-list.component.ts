import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployee: Employee;
  employees: Employee[];

  employees$: Observable<Employee[]>;
  selectedId: number;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.employees$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.employeeService.getEmployees()
      })
    );
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  getEmployees():void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

}
