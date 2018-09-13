import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoProgressComponent } from './todo-progress.component';

describe('TodoProgressComponent', () => {
  let component: TodoProgressComponent;
  let fixture: ComponentFixture<TodoProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
