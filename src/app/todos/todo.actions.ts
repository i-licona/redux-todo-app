import { createAction, props } from "@ngrx/store";

export const add = createAction(
  '[TODO] Add todo',
  props<{text:string}>()
);

export const setStatus = createAction(
  '[TODOD] Change status todo',
  props<{ id:number }>()
);

export const edit = createAction(
  '[TODO] Edit todo',
  props<{id:number, text: string}>()
);

export const remove = createAction(
  '[TODO] Remove todo',
  props<{id:number}>()
);

export const toggleAll = createAction(
  '[TODO] Toggle all',
  props<{complete:boolean}>()
);
