import { Component } from '@angular/core';

interface Person {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate: any;
}

@Component({
  selector: 'app-view-container-ref',
  template: `
    <div>{{dateValue | date:'M/d/yy'}}</div>
  `,
  styleUrls: ['./view-container-ref.component.css']
})

export class ViewContainerRefComponent{
  dateValue: number = new Date().getUTCSeconds();
  constructor() {
  }
}
