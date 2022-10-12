import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film, People, Starship, Vehicle } from '../models';
import { forkJoin, Observable } from 'rxjs';
import { ISearchResponse } from '../search/store/search.interface';

@Injectable({ providedIn: 'root' })
export class StarWarsApiService {
  private baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getPerson(personId: number): Observable<People> {
    return this.http.get<People>(`${this.baseUrl}people/${personId}`);
  }

  getFilms(films: string[]): Observable<Film[]> {
    const filmGets: Observable<Film>[] = [];
    films.forEach((filmUrl) => filmGets.push(this.http.get<Film>(filmUrl)));
    return forkJoin(filmGets);
  }

  getStarships(ships: string[]): Observable<Starship[]> {
    const shipGets: Observable<Starship>[] = [];
    ships.forEach((shipUrl) => shipGets.push(this.http.get<Starship>(shipUrl)));
    return forkJoin(shipGets);
  }

  getVehicles(vehicles: string[]): Observable<Vehicle[]> {
    const vehicleGets: Observable<Vehicle>[] = [];
    vehicles.forEach((vehicleUrl) =>
      vehicleGets.push(this.http.get<Vehicle>(vehicleUrl))
    );
    return forkJoin(vehicleGets);
  }

  searchForPeople(peopleSearchText: string): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>(
      `${this.baseUrl}people/?search=${peopleSearchText}`
    );
  }
}
