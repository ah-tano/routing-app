import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


const employeesRouts: Routes = [
  { path: 'employee-list', redirectTo: 'company-employees' },
  { path: 'employee/:id', redirectTo: 'company-employee/:id' },
  { path: 'company-employees', component: EmployeeListComponent, data: { animation: 'employee-list' } },
  { path: 'company-employee/:id', component: EmployeeDetailComponent, data: { animation: 'employee' } },
];

@NgModule({
  imports: [RouterModule.forChild(employeesRouts)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
