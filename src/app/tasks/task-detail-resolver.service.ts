import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { TasksService } from './tasks.service';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskDetailResolverService implements Resolve<Task> {
  constructor(private ts: TasksService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> | Observable<never> {
    let id = route.paramMap.get('id');

    return this.ts.getTask(id).pipe(
      take(1),
      mergeMap(task => {
        if (task) {
          return of(task);
        } else { // id not found
          this.router.navigate(['/tasks-board']);
          return EMPTY;
        }
      })
    );
  }
}
