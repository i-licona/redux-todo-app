import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  complete:boolean = false;
  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
  }
  toggeAll(){
    this.complete = !this.complete;
    this.store.dispatch(toggleAll({complete:this.complete}));
  }
}
