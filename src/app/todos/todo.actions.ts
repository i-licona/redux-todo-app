import { createAction, props } from "@ngrx/store";

export const add = createAction(
  '[TODO] Add todo',
  props<{text:string}>()
  );
