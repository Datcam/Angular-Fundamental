import {HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Passenger } from './models/passenger.interface';
import { Injectable } from '@angular/core';
import { Observable, ErrorObserver } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const PASSENGER_API = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
    console.log();
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${PASSENGER_API}/${id}`)
      .catch((error: any) => Observable.throwError(error));
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGER_API, {responseType: 'json'})
      .catch((error: any) => Observable.throwError(error));
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger)
      .catch((error: any) => Observable.throwError(error));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${PASSENGER_API}/${passenger.id}`)
      .catch((error: any) => Observable.throwError(error));
  }
}
