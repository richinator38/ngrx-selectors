export class StarWarsContainerComponentViewModel {
  currentPersonId: string;
  shouldGetPerson: boolean;

  constructor(vm?: Partial<StarWarsContainerComponentViewModel>) {
    if (vm) {
      Object.assign(this, vm);
    }
  }
}
