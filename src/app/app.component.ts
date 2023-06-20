import { Component } from '@angular/core';
import { Task } from './@types/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private taskService: TaskService) { }

  title = 'My Tasks';
  openTasksList: Task[] = this.taskService.openTasks;
  inProgressTasksList: Task[] = this.taskService.inProgressTasks;
  completedTasksList: Task[] = this.taskService.completedTasks;
}
