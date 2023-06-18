import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListComponent } from './tasks-list.component';

describe('TasksListComponent with two items', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListComponent]
    });
    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    component.tasks = [{ description: 'first', status: 'open' }, { description: 'second', status: 'open' }]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as tasks list with two items', () => {
    expect(component.tasks.length).toEqual(2);
  });

  it('should render tasks list with two items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('ul li').length).toEqual(2);
  });
});
