import { createSelector } from '@ngrx/store';

import { getCurrentPerson } from './selectors';
import { PeopleComponentViewModel } from '../../models/people.component.view-model';

/**
 * For these calculations, see this site:
 * https://www.thecalculatorsite.com/conversions/common/cm-to-feet-inches.php
 */
export const getHeightFormatted = createSelector(getCurrentPerson, (person) => {
  if (person) {
    const heightInCm = person.height;
    const heightInFeetFractional = heightInCm / 30.48;
    const heightInFeet = Math.floor(heightInFeetFractional);
    const remainderInches = Math.round(frac(heightInFeetFractional) * 12);
    return `${heightInFeet}' ${remainderInches}"`;
  }

  return '';
});

export const getPeopleComponentData = createSelector(
  getCurrentPerson,
  getHeightFormatted,
  (person, height) => {
    if (person) {
      return new PeopleComponentViewModel({
        name: person.name,
        hair_color: person.hair_color,
        gender: person.gender,
        height,
      });
    }

    return null;
  }
);

/**
 * For this calculation, see this site:
 * https://gist.github.com/Nachasic/21259aae50d0c798b5c28edb3547b318
 */
const frac = (num: number) =>
  +num.toString().replace(Math.trunc(num).toString(), '0') * Math.sign(num);
