import { Film } from './film.model';
import { Starship } from './starship.model';
import { Vehicle } from './vehicle.model';

export class AdditionalApiViewModel {
  films: Film[];
  ships: Starship[];
  vehicles: Vehicle[];

  constructor(vm?: Partial<AdditionalApiViewModel>) {
    if (vm) {
      Object.assign(this, vm);
    }
  }
}
