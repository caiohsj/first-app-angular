import { Component, Input } from '@angular/core';
import { Task } from 'src/app/@types/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() tasks: Task[] = new Array<Task>();
}
