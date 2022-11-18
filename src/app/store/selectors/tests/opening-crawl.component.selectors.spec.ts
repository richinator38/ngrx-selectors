import { IApp } from '../../app.interface';
import * as fromSelectors from '../opening-crawl.component.selectors';

describe('OpeningCrawlComponentSelectors', () => {
  it('should select getEpisodeNumberFromRoute', () => {
    // Arrange
    const routerState: Record<string, any> = {
      episodeNumber: '1',
    };

    // Act
    const result =
      fromSelectors.getEpisodeNumberFromRoute.projector(routerState);

    // Assert
    expect(result).toEqual('1');
  });

  it('should select getOpeningCrawl', () => {
    // Arrange
    const episodeNumberFromRoute = '1';
    const films = [
      {
        title: 'A New Hope',
        director: 'Rich',
        episode_id: +episodeNumberFromRoute,
        opening_crawl: 'Blah blah',
        producer: 'John',
      },
    ];

    // Act
    const result = fromSelectors.getOpeningCrawl.projector(
      films,
      episodeNumberFromRoute
    );

    // Assert
    expect(result).toEqual('Blah blah');
  });

  it('should select getOpeningCrawl of Not Found', () => {
    // Arrange
    const episodeNumberFromRoute = '2';
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
    const result = fromSelectors.getOpeningCrawl.projector(
      films,
      episodeNumberFromRoute
    );

    // Assert
    expect(result).toEqual('Film not found!');
  });
});
