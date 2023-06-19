import { Component, OnInit } from '@angular/core';
import { Task } from './@types/task';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.warn('on init')
  }

  constructor(private taskService: TaskService) { }

  title = 'Tarefas';
  tasksList: Task[] = this.taskService.getTasks();
}
