import { createAction, props } from '@ngrx/store';

export type validFilters = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
  '[FILTER] Set filter',
  props<{filter:validFilters}>()
)
