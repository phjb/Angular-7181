import { Todo } from './../models/todo.models';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: string = 'Minhas tarefas';

  public form:FormGroup;

  constructor( private formBuilder:FormBuilder) {

    this.form = this.formBuilder.group({
      title:['',Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })

    this.todos.push(new Todo(1, 'Passear com o doguinho', false));
    this.todos.push(new Todo(2, 'ir ao mercado', false));
    this.todos.push(new Todo(3, 'cortar o cabelo', true));
  }

  /* AÇÕES */

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }

}
