import { IApp } from '../../app.interface';
import * as fromSelectors from '../additional-api-data.selectors';

describe('AdditionalApiDataSelectors', () => {
  const initialState: IApp = {
    apiStuff: {
      ships: [
        {
          name: 'Cruiser',
          starship_class: 'Big One',
        },
      ],
      vehicles: [
        {
          name: 'Speeder',
          manufacturer: 'Freds Vehicles',
        },
      ],
      films: [
        {
          title: 'A New Hope',
          director: 'Rich',
          episode_id: 1,
          opening_crawl: 'Blah blah',
          producer: 'John',
        },
      ],
    },
    currentPerson: null,
    lastPersonId: null,
  };

  it('should select getAdditionalApiData', () => {
    // Act
    const result = fromSelectors.getAdditionalApiData.projector(
      initialState.apiStuff.films,
      initialState.apiStuff.ships,
      initialState.apiStuff.vehicles
    );

    // Assert
    expect(result).toBeDefined();
    expect(result.ships).toBeDefined();
    expect(result.ships.length).toEqual(1);
    expect(result.vehicles).toBeDefined();
    expect(result.vehicles.length).toEqual(1);
    expect(result.films).toBeDefined();
    expect(result.films.length).toEqual(1);
  });
});
