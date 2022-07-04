import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { add, cleanComplete, edit, remove, setStatus, toggleAll } from "./todo.actions";

export const initialState:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Estudiar .net core'),
  new Todo('Estudiar Angular'),
  new Todo('Estudiar React'),
];

const _todoReducer = createReducer(initialState,
  on(add, (state, {text}) => [...state, new Todo(text)]),
  on(setStatus, (state, {id}) =>{
    return state.map(todo => {
      if (todo.id == id) {
        return{
          ...todo,
          completado:!todo.completado
        }
      }else{
        return todo;
      }
    })
  }),
  on(edit, (state, {id, text}) =>{
    return state.map(todo => {
      if (todo.id == id) {
        return{
          ...todo,
          texto:text
        }
      }else{
        return todo;
      }
    })
  }),
  on(remove, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, {complete}) =>{
    return state.map(todo => {
      return{
        ...todo,
        completado:complete
      }
    })
  }),
  on(cleanComplete,(state => state.filter(todo => !todo.completado)))
);

export const todoReducer = (state:any, action:Action) =>{
  return _todoReducer(state, action);
}
