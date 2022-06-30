import { Action, createReducer,on } from "@ngrx/store";
import { setFilter, validFilters } from "./filter.actions";



export const initialState:string = 'todos';

const _filterReducer = createReducer(initialState,
  on(setFilter, (state, {filter}) => filter)
);

export const filterReducer = (state:any, action:Action) =>{
  return _filterReducer(state, action);
}
