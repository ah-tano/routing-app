import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';

import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<TaskDetailComponent> {
  constructor(private dialogService: DialogService) {
  }

  canDeactivate(
    component: TaskDetailComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log(route.paramMap.get('id'));

    console.log(state.url);

    if (!component.task || component.task.name === component.editName) {
      return true;
    }

    return component.dialogService.confirm('Discard changes?');
  }
}
