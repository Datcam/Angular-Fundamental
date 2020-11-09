import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h1>Airline passenger</h1>
      <div>
        Total passengers: {{ischeckedIn() || 0}}/{{items?.length || 0}}
      </div>
    </div>
  `
})

export class PassengerCountComponent {
  @Input() items: Passenger[];
  ischeckedIn(): number {
    if (!this.items) {return};
    const resultItems = this.items.filter((passenger: Passenger) => passenger.checkedIn);
    return resultItems ? resultItems.length : 0;
  }
}
