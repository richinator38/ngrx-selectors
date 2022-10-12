import { createAction, props } from '@ngrx/store';

export const searchForPeople = createAction(
  '[Search] searchForPeople',
  props<{ peopleText: string }>()
);
export const searchForPeopleSuccess = createAction(
  '[Search] searchForPeopleSuccess',
  props<{ results: any }>()
);
