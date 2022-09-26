import { Film } from './film.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';
import { Species } from './species.model';

export interface People {
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: number;
  mass: number;
  name: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  films_full: Film[];
  species_full: Species[];
  starships_full: Starship[];
  vehicles_full: Vehicle[];
}
