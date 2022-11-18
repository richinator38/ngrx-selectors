import * as fromSelectors from '../people.component.selectors';

describe('PeopleComponentSelectors', () => {
  it('should select formatted height of 6 feet 2 inches', () => {
    // Arrange
    const height = 187;

    // Act
    const result = fromSelectors.getHeightFormatted.projector(height);

    // Assert
    expect(result).toEqual('6\' 2"');
  });

  it('should select formatted height of zero', () => {
    // Arrange
    const height = 0;

    // Act
    const result = fromSelectors.getHeightFormatted.projector(height);

    // Assert
    expect(result).toEqual('0\' 0"');
  });

  it('should select object of people component data', () => {
    // Arrange
    const personName = 'Luke Skywalker';
    const personHairColor = 'Blond';
    const personGender = 'Male';
    const height = '6\' 2"';

    // Act
    const result = fromSelectors.getPeopleComponentData.projector(
      personName,
      personHairColor,
      personGender,
      height
    );

    // Assert
    expect(result).toBeDefined();
    expect(result.gender).toBe(personGender);
    expect(result.hair_color).toBe(personHairColor);
    expect(result.height).toBe(height);
    expect(result.name).toBe(personName);
  });

  it('should select null object of people component data', () => {
    // Arrange
    const personName: string = null;
    const personHairColor = 'Blond';
    const personGender = 'Male';
    const height = '6\' 2"';

    // Act
    const result = fromSelectors.getPeopleComponentData.projector(
      personName,
      personHairColor,
      personGender,
      height
    );

    // Assert
    expect(result).toBeNull();
  });
});
