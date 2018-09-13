import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})

export class TodoHeaderComponent implements OnInit {

  //========================================= PROPERTIES ================================================//

  //---------- initialize headerTitle ----------//
  headerTitle: string = 'Today Tasks';

  //========================================= FUNCTIONS ================================================//

  //---------- constructor ----------//
  constructor() {
  }

  //---------- ngOnInit ----------//
  ngOnInit() {
  }

}
