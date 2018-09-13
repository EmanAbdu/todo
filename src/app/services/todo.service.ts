import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';


@Injectable()
export class TodoService {

  //======================================= Properties =======================================//

  //---------------- nextId Declaration ----------------//
  private nextId: number;

  //---------------- todos_length Declaration ----------------//
  private todos_length: number;

  //---------------- isChecked initialized ----------------//
  private checkedItems: number = 0;

  //---------------- progress Declaration ----------------//
  public progress: number;

  //======================================= Functions =======================================//

  //---------------- constructor ----------------//
  constructor() {

    let todos = this.getTodos();
    this.todos_length = todos.length;

    if (todos.length == 0) {
      this.nextId = 0;
    }

    else {
      let maxId = todos[todos.length - 1].id
      this.nextId = maxId + 1;
    }

  }

  //---------------- getTodos Function ----------------//
  public getTodos(): Todo[] {

    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;

  }

  //---------------- addTodo Function ----------------//
  public addTodo(name: string) {

    let todo = new Todo(this.nextId, name, false);
    let todos = this.getTodos();
    todos.push(todo);
    this.setLocalStorageTodos(todos);
    this.nextId++;
    this.todos_length = todos.length;

  }

  //---------------- deleteTodo Function ----------------//
  public deleteTodos(deletedTodo) {

    if (deletedTodo.checked === true) {
      this.checkedItems--;
    }

    let todos = this.getTodos();
    todos = todos.filter((todo) => todo.id != deletedTodo.id);

    this.setLocalStorageTodos(todos);
    this.todos_length = todos.length;

  }

  //---------------- CheckOrUncheck Function ----------------/
  public CheckOrUncheck(id: number, isChecked: boolean) {

    let todos = this.getTodos();
    let itemUpdated = { id: id, checked: !isChecked };

    if (itemUpdated.checked === true) {
      this.checkedItems++;
    }

    else if (itemUpdated.checked === false) {
      this.checkedItems--;
    }

    todos.find(todo => todo.id == itemUpdated.id).checked = itemUpdated.checked
    this.setLocalStorageTodos(todos);

  }

  //---------------- setLocalStorageTodos Function ----------------//
  private setLocalStorageTodos(todos: Todo[]): void {

    localStorage.setItem('todos', JSON.stringify({ todos: todos }));

  }

  //---------------- initialCheckedItems Function ----------------//
  public initialCheckedItems(): void {

    let todos = this.getTodos();

    for (let todo of todos) {

      if (todo.checked === true) this.checkedItems++;

    }

  }

  //---------------- totalProgress Function ----------------//
  public todoProgress(): number {

    let todos = this.getTodos();
    this.todos_length = todos.length;
    return (this.checkedItems / this.todos_length);

  }

  //---------------- updateItem Function ----------------//
  public updateItem(id: number, updatedText: string): void {

    let todos = this.getTodos();
    let itemUpdated = { id: id, name: updatedText };
    todos.find(todo => todo.id == itemUpdated.id).name = itemUpdated.name
    this.setLocalStorageTodos(todos);

  }


}
