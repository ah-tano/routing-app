import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Task } from '../task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { task: Task }) => {
        this.editName = data.task.name;
        this.task = data.task;
      });
  }

  cancel() {
    this.gotoTasks();
  };

  save() {
    this.task.name = this.editName;
    this.gotoTasks();
  };

  gotoTasks() {
    let taskId = this.task ? this.task.id : null;
    this.router.navigate(['../', { id: taskId, foo: 'foo' }], { relativeTo: this.route })
  }
}
