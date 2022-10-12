import { IAppState } from 'src/app/store/app.interface';

export interface IPeopleFull {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface ISearchResponse {
  count: number;
  results: IPeopleFull[];
}

export interface ISearch {
  searchResponse: ISearchResponse;
}

export interface ISearchState extends IAppState {
  search: ISearch;
}

export const initialSearchState: ISearch = {
  searchResponse: { count: 0, results: [] },
};
