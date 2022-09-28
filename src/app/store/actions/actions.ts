import { createAction, props } from '@ngrx/store';

import { Film, People, Starship, Vehicle } from 'src/app/models';

export const fetchPerson = createAction(
  '[Star Wars] fetchPerson',
  props<{ personId: number }>()
);

export const setPerson = createAction(
  '[Star Wars] setPerson',
  props<{ person: People }>()
);

export const fetchFilms = createAction(
  '[Star Wars] fetchFilms',
  props<{ films: string[] }>()
);

export const setFilms = createAction(
  '[Star Wars] setFilms',
  props<{ films: Film[] }>()
);

export const fetchStarships = createAction(
  '[Star Wars] fetchStarships',
  props<{ ships: string[] }>()
);

export const setStarships = createAction(
  '[Star Wars] setStarships',
  props<{ ships: Starship[] }>()
);

export const fetchVehicles = createAction(
  '[Star Wars] fetchVehicles',
  props<{ vehicles: string[] }>()
);

export const setVehicles = createAction(
  '[Star Wars] setVehicles',
  props<{ vehicles: Vehicle[] }>()
);
