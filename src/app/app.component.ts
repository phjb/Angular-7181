import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: any[] = [];
  public title: string = 'Minhas tarefas';

  constructor() {
    this.todos.push('passear com o doguinho');
    this.todos.push('ir ao mercado');
    this.todos.push('cortar o cabelo');

    this.todos.push(2020);
    this.todos.push(new Date());
  }

}
