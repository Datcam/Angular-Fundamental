import {
  Component,
  Input,
  Output,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'passenger-details',
  styleUrls: ['./passenger-details.component.css'],
  template: `
    <div>
      <br>
      <span class="status" [ngClass]="{'checked-in': detail.checkedIn, 'checked-out': !detail.checkedIn}" ></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        >
      </div>
      <div *ngIf="!editing">
        {{detail.fullname}}
      </div>
      <div class="date">
        Check in date:
        {{detail.checkedInDate ? (detail.checkedInDate | date: 'yMMMMd') : 'No data provide'}}
      </div>
      <button (click)="toggleEdit()">
        {{editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove(detail)">
        Remove
      </button>
      <button
      (click)="goToPassenger(detail)"
      >View</button>
    </div>
  `
})

export class PassengerDetailsComponent {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;
  text: string = 'Maksym';
  constructor(private router: Router) {}

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }

    this.editing = !this.editing;
  }

  onRemove(detail: Passenger) {
    this.remove.emit(detail);
  }

  goToPassenger(passenger: Passenger): void {
    this.view.emit(passenger);
  }
}
