import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  constructor(private taskService: TaskService) { }

  taskForm = new FormGroup({
    description: new FormControl('', [Validators.required])
  });

  onSubmit() {
    const description = String(this.taskForm.get('description')?.value);
    this.taskService.addTask({ description, status: "open" });
  }
}
