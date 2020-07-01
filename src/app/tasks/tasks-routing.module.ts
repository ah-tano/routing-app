import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksBoardHomeComponent } from './tasks-board-home/tasks-board-home.component';
import { TasksBoardComponent } from './tasks-board/tasks-board.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const tasksRoutes: Routes = [
  {
    path: 'tasks-board',
    component: TasksBoardComponent,
    children: [
      {
        path: '',
        component: TasksListComponent,
        children: [
          {
            path: ':id',
            component: TaskDetailComponent
          },
          {
            path: '',
            component: TasksBoardHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
