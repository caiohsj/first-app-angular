import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormComponent } from './task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render task form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("form input[id='description']")).toBeTruthy();
  });
});
