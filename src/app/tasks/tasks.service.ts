import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(TASKS);

  constructor() { }

  getTasks() { return this.tasks$; }

  getTask(id: number | string) {
    return this.getTasks().pipe(
      map(tasks => tasks.find(task => task.id === +id))
    );
  }
}
