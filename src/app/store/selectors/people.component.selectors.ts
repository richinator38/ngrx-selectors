import { createSelector } from '@ngrx/store';

import {
  getPersonGender,
  getPersonHairColor,
  getPersonHeight,
  getPersonName,
} from './selectors';
import { PeopleComponentViewModel } from '../../models/people.component.view-model';

/**
 * For these calculations, see this site:
 * https://www.thecalculatorsite.com/conversions/common/cm-to-feet-inches.php
 */
export const getHeightFormatted = createSelector(getPersonHeight, (height) => {
  const heightInCm = height;
  const heightInFeetFractional = heightInCm / 30.48;
  const heightInFeet = Math.floor(heightInFeetFractional);
  const remainderInches = Math.round(frac(heightInFeetFractional) * 12);
  return `${heightInFeet}' ${remainderInches}"`;
});

export const getPeopleComponentData = createSelector(
  getPersonName,
  getPersonHairColor,
  getPersonGender,
  getHeightFormatted,
  (name, hair, gender, height) => {
    if (name) {
      return new PeopleComponentViewModel({
        name: name,
        hair_color: hair,
        gender: gender,
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
