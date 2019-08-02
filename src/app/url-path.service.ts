import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { timer,Observable } from "rxjs";
import { switchMap, takeUntil, catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'observe': 'response',
    'responseType': 'json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UrlPathService {

  private baseURL: string = "https://swapi.co/api/";
  private characterUrl: string = this.baseURL + "people/";
  private filmsUrl: string = this.baseURL + "films/";
  private speciesUrl: string = this.baseURL + "species/";
  private starshipsUrl: string = this.baseURL + "starships/";
  private vehiclesUrl: string = this.baseURL + "vehicles/";
  private planetsUrl: string = this.baseURL + "planets/";

  constructor(private  httpClient:  HttpClient) { }

  fetchCharacters():  Observable<any>{
    return <Observable<any>>this.httpClient.get(this.characterUrl);
  }

  fetchFilms():  Observable<any>{
    return <Observable<any>>this.httpClient.get(this.filmsUrl);
  }

  fetchSpecies():  Observable<any>{
    return <Observable<any>>this.httpClient.get(this.speciesUrl);
  }

  fetchStarships():  Observable<any>{
    return <Observable<any>>this.httpClient.get(this.starshipsUrl);
  }

  fetchVehicles():  Observable<any>{
    return <Observable<any>>this.httpClient.get(this.vehiclesUrl);
  }

  fetchPlanets():  Observable<any>{
    return <Observable<any>>this.httpClient.get(this.planetsUrl);
  }

  fetchdata(url: string): Observable<any>
  {
    return <Observable<any>>this.httpClient.get(url);
  }
}
