import { IApp } from '../../app.interface';
import * as fromSelectors from '../selectors';

describe('Selectors', () => {
  const initialState: IApp = {
    apiStuff: { ships: null, vehicles: null, films: null },
    currentPerson: {
      birth_year: null,
      eye_color: 'blue',
      films: null,
      gender: 'male',
      hair_color: 'blond',
      height: 70,
      mass: 200,
      name: 'Luke Skywalker',
      starships: null,
      vehicles: null,
    },
    lastPersonId: '0',
  };

  it('should select getAppState', () => {
    // Act
    const result = fromSelectors.getAppState.projector(initialState);

    // Assert
    expect(result).toBeDefined();
    expect(result.apiStuff).toBeDefined();
    expect(result.currentPerson).toBeDefined();
    expect(result.lastPersonId).toEqual('0');
  });

  it('should select getCurrentPerson', () => {
    // Act
    const result = fromSelectors.getCurrentPerson.projector(initialState);

    // Assert
    expect(result).toBeDefined();
    expect(result.name).toEqual('Luke Skywalker');
  });

  it('should select getAdditionalData', () => {
    // Arrange
    initialState.apiStuff.films = [
      {
        title: 'A New Hope',
        director: 'Rich',
        episode_id: 1,
        opening_crawl: 'Blah blah',
        producer: 'John',
      },
    ];

    // Act
    const result = fromSelectors.getAdditionalData.projector(initialState);

    // Assert
    expect(result).toBeDefined();
    expect(result.films).toBeDefined();
    expect(result.films.length).toEqual(1);
  });

  it('should select getLastPersonId', () => {
    // Act
    const result = fromSelectors.getLastPersonId.projector(initialState);

    // Assert
    expect(result).toEqual('0');
  });

  it('should select getPersonName', () => {
    // Act
    const result = fromSelectors.getPersonName.projector(
      initialState.currentPerson
    );

    // Assert
    expect(result).toEqual('Luke Skywalker');
  });

  it('should select getPersonHairColor', () => {
    // Act
    const result = fromSelectors.getPersonHairColor.projector(
      initialState.currentPerson
    );

    // Assert
    expect(result).toEqual('blond');
  });

  it('should select getPersonGender', () => {
    // Act
    const result = fromSelectors.getPersonGender.projector(
      initialState.currentPerson
    );

    // Assert
    expect(result).toEqual('male');
  });

  it('should select getPersonHeight', () => {
    // Act
    const result = fromSelectors.getPersonHeight.projector(
      initialState.currentPerson
    );

    // Assert
    expect(result).toEqual(70);
  });

  it('should select getFilms', () => {
    // Arrange
    initialState.apiStuff.films = [
      {
        title: 'A New Hope',
        director: 'Rich',
        episode_id: 1,
        opening_crawl: 'Blah blah',
        producer: 'John',
      },
    ];

    // Act
    const result = fromSelectors.getFilms.projector(initialState.apiStuff);

    // Assert
    expect(result).toBeDefined();
    expect(result.length).toEqual(1);
    expect(result[0].title).toEqual('A New Hope');
  });

  it('should select getShips', () => {
    // Arrange
    initialState.apiStuff.ships = [
      {
        name: 'Cruiser',
        starship_class: 'Big One',
      },
    ];

    // Act
    const result = fromSelectors.getShips.projector(initialState.apiStuff);

    // Assert
    expect(result).toBeDefined();
    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual('Cruiser');
  });

  it('should select getVehicles', () => {
    // Arrange
    initialState.apiStuff.vehicles = [
      {
        name: 'Speeder',
        manufacturer: 'Freds Vehicles',
      },
    ];

    // Act
    const result = fromSelectors.getVehicles.projector(initialState.apiStuff);

    // Assert
    expect(result).toBeDefined();
    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual('Speeder');
  });
});
