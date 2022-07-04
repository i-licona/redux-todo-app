import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos:Todo[] = [];
  filter:string;
  constructor(
    private store:Store<AppState>
  ) {
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.filter = filter;
    });
  }

  ngOnInit(): void {
  }

}
