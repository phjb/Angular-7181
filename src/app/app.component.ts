import { Todo } from './../models/todo.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: string = 'Minhas tarefas';

  constructor() {
    this.todos.push( new Todo(1,'Passear com o doguinho',false));
    this.todos.push( new Todo(2,'ir ao mercado',false));
    this.todos.push(new Todo(3,'cortar o cabelo',true));
  }

}
