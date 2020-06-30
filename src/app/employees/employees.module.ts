import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';



@NgModule({
  declarations: [
    EmployeeDetailComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule,
  ]
})
export class EmployeesModule { }
