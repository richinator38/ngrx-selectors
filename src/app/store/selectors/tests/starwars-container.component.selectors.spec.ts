import * as fromSelectors from '../starwars-container.component.selectors';

describe('StarwarsContainerComponentSelectors', () => {
  it('should select getPersonNumberFromRoute', () => {
    // Arrange
    const routerState: Record<string, any> = {
      personNumber: '22',
    };

    // Act
    const result =
      fromSelectors.getPersonNumberFromRoute.projector(routerState);

    // Assert
    expect(result).toBe('22');
  });

  it('should select getStarWarsContainerComponentData shouldGetPerson=true', () => {
    // Arrange
    const lastPersonId = '5';
    const personNumberFromRoute = '2';

    // Act
    const result = fromSelectors.getStarWarsContainerComponentData.projector(
      lastPersonId,
      personNumberFromRoute
    );

    // Assert
    expect(result).toBeDefined();
    expect(result.currentPersonId).toBe('2');
    expect(result.shouldGetPerson).toBeTrue();
  });

  it('should select getStarWarsContainerComponentData shouldGetPerson=false', () => {
    // Arrange
    const lastPersonId = '2';
    const personNumberFromRoute = '2';

    // Act
    const result = fromSelectors.getStarWarsContainerComponentData.projector(
      lastPersonId,
      personNumberFromRoute
    );

    // Assert
    expect(result).toBeDefined();
    expect(result.currentPersonId).toBe('2');
    expect(result.shouldGetPerson).toBeFalse();
  });

  it('should select getStarWarsContainerComponentData personNumberFromRoute=null', () => {
    // Arrange
    const lastPersonId = '2';
    const personNumberFromRoute: string = null;

    // Act
    const result = fromSelectors.getStarWarsContainerComponentData.projector(
      lastPersonId,
      personNumberFromRoute
    );

    // Assert
    expect(result).toBeDefined();
    expect(result.currentPersonId).toBeNull();
    expect(result.shouldGetPerson).toBeFalse();
  });
});
