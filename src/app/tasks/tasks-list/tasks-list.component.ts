import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

import { TasksService } from '../tasks.service';
import {Task } from '../task';
import { Observable }     from 'rxjs';
import { switchMap }      from 'rxjs/operators';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<Task[]>;
  selectedId: number;

  constructor(
    private service: TasksService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.tasks$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getTasks();
      })
    );
  }

}
