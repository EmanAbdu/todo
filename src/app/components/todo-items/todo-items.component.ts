import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TodoItemsComponent implements OnInit {

  //======================================= Properties =======================================//

  //---------------- Input Decoration ----------------//
  @Input() todos: Todo[];
  @Input() progress: number;

  dialogResult = "";

  iconIsShown: boolean = false;
  chooseIsShown:boolean = true;

  //---------------- constructor ----------------//
  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  //---------------- ngonInit ----------------//
  ngOnInit() {

    this.onGet();
    this.todoService.initialCheckedItems();
    this.progress = this.todoService.todoProgress();
  }

  //---------------- onGet Function ----------------//
  onGet() {

    this.todos = this.todoService.getTodos();
    this.progress = this.todoService.todoProgress();

  }

  //---------------- onDelete Function ----------------//
  onDelete(todo): void {

    this.todoService.deleteTodos(todo);
    this.onGet();
    this.iconIsShown = false;
    this.chooseIsShown =true;
  }

  //---------------- onCheck Function ----------------//
  onCheck(id: number, checked: boolean) {

    this.todoService.CheckOrUncheck(id, checked);
    this.onGet();

  }


  //---------- openDialog Function ----------//
  openDialog(editedItem) {

    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: editedItem//'This text is passed in to dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })

    this.iconIsShown = false;
    this.chooseIsShown =true;
  }

  showIcons() {
    this.iconIsShown = true;
    this.chooseIsShown =false;

  }

}
