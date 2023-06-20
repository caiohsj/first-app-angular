import { Injectable } from '@angular/core';
import { Task } from '../@types/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  openTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  completedTasks: Task[] = [];

  addTask(task: Task) {
    switch(task.status) {
      case 'open':
        this.openTasks.push(task);
        break;
      case 'inProgress':
        this.inProgressTasks.push(task);
        break;
      case 'completed':
        this.completedTasks.push(task);
        break;
    }
  }
}
