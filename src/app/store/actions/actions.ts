import { createAction, props } from '@ngrx/store';

import { People } from 'src/app/models';

export const fetchPerson = createAction(
  '[Star Wars] fetchPerson',
  props<{ personId: number }>()
);

export const setPerson = createAction(
  '[Star Wars] setPerson',
  props<{ person: People }>()
);
