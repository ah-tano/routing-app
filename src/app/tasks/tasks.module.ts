import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TasksBoardHomeComponent } from './tasks-board-home/tasks-board-home.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    TasksBoardComponent,
    TasksBoardHomeComponent,
    TasksListComponent,
    TaskDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule,
  ]
})
export class TasksModule { }
