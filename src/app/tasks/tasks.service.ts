import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Task } from './task';
import { TASKS } from './mock-tasks';
import { map } from 'rxjs/operators';
import { Employee } from '../employees/employee';
import { EMPLOYEES } from '../employees/mock-employees';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  getTask(id: number | string) {
    return this.getTasks().pipe(
      map((tasks: Task[]) => tasks.find(task => task.id === +id))
    );
  }
}
