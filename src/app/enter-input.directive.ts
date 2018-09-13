import { Directive, HostListener, ElementRef, } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './classes/todo';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

@Directive({
  selector: '[enterInput]'
})
export class EnterInputDirective {


  constructor(private todoInput: TodoInputComponent) {

    
  }


  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log(event);
    let x = event.keyCode;
    if (x === 13) {
      let addedItem = event.target as HTMLInputElement;
      this.todoInput.onAdd(addedItem.value);
      // addedItem.value = null;
      
    }
  }


  // //---------------- onAdd Function ----------------//
  // onAdd(addedText): void {

  //   if (this.addedItem !== "") {

  //     this.todoService.addTodo(addedText);
  //     this.onGet();
  //     this.addedItem = ""; //reset input text to empty strings

  //   }
  // }

  // //---------------- onGet Function ----------------//
  // onGet() {

  //   this.todos = this.todoService.getTodos();
  //   this.progress = this.todoService.todoProgress();

  // }


}
