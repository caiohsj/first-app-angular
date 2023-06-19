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
    description: new FormControl('', [Validators.required]),
    status: new FormControl('open', { nonNullable: true })
  }); 

  onSubmit() {
    const { description, status } = this.taskForm.value;
    if (this.taskForm.valid) this.taskService.addTask({ description: String(description), status: String(status) });
  }
}
