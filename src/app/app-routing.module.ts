import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TodoInputComponent } from './components/todo-input/todo-input.component';

const routes :Routes = [
{ path: 'components/todo-input',  component:  TodoInputComponent }

];

@NgModule({

exports: [RouterModule],
imports: [RouterModule.forRoot(routes)]

})
export class AppRoutingModule { }
