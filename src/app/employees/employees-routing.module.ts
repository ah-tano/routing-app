import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


const employeesRouts: Routes = [
  { path: 'employee-list', component: EmployeeListComponent, data: { animation: 'employee-list' } },
  { path: 'employee/:id', component: EmployeeDetailComponent, data: { animation: 'employee' } },
];

@NgModule({
  imports: [RouterModule.forChild(employeesRouts)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
