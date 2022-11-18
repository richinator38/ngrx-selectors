import { IApp } from '../../app.interface';
import * as fromSelectors from '../additional-api-data.selectors';

describe('AdditionalApiDataSelectors', () => {
  it('should select getAdditionalApiData', () => {
    // Arrange
    const ships = [
      {
        name: 'Cruiser',
        starship_class: 'Big One',
      },
    ];
    const vehicles = [
      {
        name: 'Speeder',
        manufacturer: 'Freds Vehicles',
      },
    ];
    const films = [
      {
        title: 'A New Hope',
        director: 'Rich',
        episode_id: 1,
        opening_crawl: 'Blah blah',
        producer: 'John',
      },
    ];

    // Act
    const result = fromSelectors.getAdditionalApiData.projector(
      films,
      ships,
      vehicles
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
