import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Film, People } from '../models';
import { forkJoin, Observable, switchMap, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StarWarsApiService {
  private baseUrl: string = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getPerson(personId: number): Observable<People> {
    return this.http.get<People>(`${this.baseUrl}people/${personId}`).pipe(
      switchMap((person) => {
        const filmGets: Observable<Film>[] = [];
        person.films.forEach((filmUrl) =>
          filmGets.push(this.http.get<Film>(filmUrl))
        );
        return forkJoin(filmGets).pipe(
          switchMap((films) => (person.films_full = films)),
          switchMap(() => of(person))
        );
      })
    );
  }
}
