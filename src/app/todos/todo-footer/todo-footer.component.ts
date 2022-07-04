import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setFilter, validFilters } from '../../filter/filter.actions';
import { AppState } from '../../app.state';
import { cleanComplete } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  public filter:string;
  public filters:validFilters[] = ['todos','completados','pendientes'];
  public pending:number = 0;
  constructor(
    private store:Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) =>{
      this.filter = filter;
      this.pending = todos.filter(todo => !todo.completado).length;
    });
  }

  changeFilter(filter:validFilters){
    this.store.dispatch(setFilter({ filter:filter }));
  }

  removeComplete(){
    this.store.dispatch(cleanComplete());
  }
}
