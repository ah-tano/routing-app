import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee$: Observable<Employee>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.employee$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getEmployee(params.get('id')))
    );
  }

  gotoEmployees(employee: Employee) {
    let employeeId = employee ? employee.id : null;
    this.router.navigate(['/employee-list', { id: employeeId, foo: 'foo' }]);
  }

}
