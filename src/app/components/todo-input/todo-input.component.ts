import { Component, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  //======================================= Properties =======================================//

  //---------------- todos array Declaration ----------------//
  private todos: Todo[];

  //---------------- progress Declaration ----------------//  
  progress: number;

  //---------------- addedItem initialization ----------------//
  addedItem = "";

  //======================================= Functions =======================================//

  //---------------- construcor ----------------//  
  constructor(private todoService: TodoService) { }

  //---------------- ngOnInit ----------------//
  ngOnInit() {

    this.onGet();
  }

  //---------------- onAdd Function ----------------//
  onAdd(addedText): void {

    if (this.addedItem !== "") {

      this.todoService.addTodo(addedText);
      this.onGet();
      this.addedItem = ""; //reset input text to empty strings

    }
  }

  //---------------- onGet Function ----------------//
  onGet() {

    this.todos = this.todoService.getTodos();
    this.progress = this.todoService.todoProgress();

  }

}
