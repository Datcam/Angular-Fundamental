import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import {Passenger} from '../../models/passenger.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
  <div>
    <div>
      <button
        (click)="goBack()"
      >&lsaquo; Go back</button>
    </div>
    <passenger-form
    [detail]="passenger"
    (update)="updatePassenger($event)"
    ></passenger-form>
  </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerDashboard: PassengerDashboardService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.params
      .mergeMap((data: Passenger) => this.passengerDashboard.getPassenger(data.id))
      .subscribe((passenger: Passenger) => {
        console.log('passenger: ', passenger);
        this.passenger = passenger;
      }, (err: any) => {
        console.log(err);
      } );
  }
  updatePassenger(passenger: Passenger): void {
    console.log(passenger);
    this.passengerDashboard.updatePassengers(passenger)
      .subscribe((response: Passenger) => {
        console.log('All is ok: ', response);
        this.passenger = Object.assign({}, this.passenger, passenger);
      }, (err) => {
        console.log('error: ', err);
      });
  }

  goBack(): void {
    this.router.navigate(['/passenger']);
  }
}
