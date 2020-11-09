import { Component, Input, Output } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { BaggageInterface } from '../../models/baggage.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          minlength="2"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname"
        >
        <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>

        <div *ngIf="fullname.errors?.minlength && fullname.dirty" class="error">
          Should type name not less than {{ fullname.errors?.minlength.requiredLength }}
        </div>
      </div>

      <div>
        Passenger id:
        <input
          type="number"
          name="id"
          required
          minlength="0"
          #id="ngModel"
          [ngModel]="detail?.id"
        >
        <div *ngIf="id.errors?.minlength && id.dirty" class="error">
          Passenger id is required
        </div>
      </div>

      <div>
        <label>
          Checked in:
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckedIn($event)"
          >
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        <div>
          Checked in date:
          <input
            type="number"
            name="checkedInDate"
            [ngModel]="detail?.checkedInDate"
          >
        </div>
      </div>

      <div>
        Luggage:
        <select
        name="baggage"
        [ngModel]="detail?.baggage"
        (ngModelChange)="handleBaggage($event)"
        >
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
<br>
      </div>
      <button type="submit" [disabled]="form.invalid">Update passenger</button>
    </form>
  `
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;
  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: BaggageInterface[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    },
  ];

  constructor() {}

  toggleCheckedIn(checkedIn: boolean): void {
    if (checkedIn) {
      this.detail.checkedInDate = Date.now();
    }
  }

  handleBaggage(event: any): void {
    console.log(event);
    console.log(this.detail.baggage);
  }

  handleSubmit(passenger: Passenger, isValid: boolean): void {
    if (isValid) {
      this.update.emit(passenger);
    }
  }

}
