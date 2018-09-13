import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-progress',
  templateUrl: './todo-progress.component.html',
  styleUrls: ['./todo-progress.component.css']
})
export class TodoProgressComponent implements OnInit {

  //========================================= PROPERTIES ================================================

  //---------- initialize array ----------//
  todos: Todo[];


  //---------- Input Decorators ----------//
  @Input() progress: number= 0;

  //===================================== FUNCTIONS =============================================================

  //---------- construcor ----------//
  constructor(private todoService: TodoService) { }

  //---------- ngOnInit  ----------//
  ngOnInit() {


  }



}
