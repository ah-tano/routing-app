import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageTasksComponent } from './manage-tasks/manage-tasks.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageTasksComponent, ManageEmployeesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
