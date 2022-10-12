import { createSelector } from '@ngrx/store';

import { selectRouteParam } from './router.selectors';
import { getFilms } from './selectors';

export const getEpisodeNumberFromRoute = selectRouteParam('episodeNumber');

export const getOpeningCrawl = createSelector(
  getFilms,
  getEpisodeNumberFromRoute,
  (films, episodeNumber) => {
    if (films && episodeNumber) {
      const film = films.find((f) => f.episode_id == +episodeNumber);
      if (film) {
        return film.opening_crawl;
      }
    }
    return 'Film not found!';
  }
);
