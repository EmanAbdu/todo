import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})

export class MyDialogComponent implements OnInit {

  //========================================= PROPERTIES ================================================//



  //========================================= FUNCTIONS ================================================//

  //------ constructor -------//
  constructor(public thisDialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo, public todoService: TodoService) {

  }

  //------ ngOnInit -------//
  ngOnInit() {
  }

  //------ onCloseConfirm Function -------//
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
    this.todoService.updateItem(this.data.id, this.data.name);
  }

  //------ onCloseCancel Function -------//
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
    this.todoService.getTodos();

  }

}
