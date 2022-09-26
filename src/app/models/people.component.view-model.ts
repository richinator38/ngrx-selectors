export class PeopleComponentViewModel {
  name: string;
  hair_color: string;
  gender: string;
  height: string;

  constructor(vm?: Partial<PeopleComponentViewModel>) {
    if (vm) {
      Object.assign(this, vm);
    }
  }
}
