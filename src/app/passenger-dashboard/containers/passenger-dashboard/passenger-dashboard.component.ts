import { Component, OnInit, Injectable } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Observable } from 'rxjs-observable';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
<!--  <div>-->
<!--    <passenger-count-->
<!--      [items]="passengers"-->
<!--    >-->
<!--    </passenger-count>-->
<!--    <passenger-details-->
<!--      *ngFor="let passenger of passengers;"-->
<!--      [detail]="passenger"-->
<!--      (edit)="onEdit($event)"-->
<!--      (remove)="onRemovePassenger($event)"-->
<!--      (view)="goToPassengerPage($event)"-->
<!--    ></passenger-details>-->
<!--  </div>-->
  <div>
    <div style="width: 100px; height: 100px; background: red"></div>
  </div>
  `
})
@Injectable()
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];
  constructor(
    private passengerDashboard: PassengerDashboardService,
    private router: Router
    ) {}
  ngOnInit(): void {
    this.passengerDashboard.getPassengers()
      .subscribe((data: Passenger[]) => {
        this.passengers = data;
      }, (error => console.log(`You have got an error like this one: ${error.statusText} because ${error.message}`)));
  }

  onRemovePassenger(event: Passenger): void {
    this.passengerDashboard
      .removePassenger(event)
      .subscribe((passenger: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
      });
  }
  onEdit(event: Passenger): void {
    this.passengerDashboard
      .updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, data);
          }

          return passenger;
        });
      });
  }

  goToPassengerPage(passenger: Passenger): void {
    this.router.navigate(['/passengers', passenger.id]);
  }
}
