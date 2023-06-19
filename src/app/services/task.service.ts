import { Injectable } from '@angular/core';
import { Task } from '../@types/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
