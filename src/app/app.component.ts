import { Component } from '@angular/core';
import { Task } from './@types/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app-angular';
  tasksList: Task[] = [{ description: 'teste 1', status: 'open' }];
}
