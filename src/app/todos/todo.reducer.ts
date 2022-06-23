import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { add } from "./todo.actions";

export const initialState:Todo[] = [];

const _todoReducer = createReducer(initialState,
  on(add, (state, {text}) => [...state, new Todo(text)]),
);

export const todoReducer = (state:any, action:Action) =>{
  return _todoReducer(state, action);
}
