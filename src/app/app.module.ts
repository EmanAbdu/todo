import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { TodoProgressComponent } from './components/todo-progress/todo-progress.component';
import { TodoService } from './services/todo.service';
import { AppRoutingModule } from './app-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EnterInputDirective } from './enter-input.directive';



@NgModule({

  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoInputComponent,
    TodoItemsComponent,
    TodoProgressComponent,
    MyDialogComponent,
    EnterInputDirective
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule
  ],

  entryComponents: [
    MyDialogComponent
  ],

  providers: [
    TodoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
