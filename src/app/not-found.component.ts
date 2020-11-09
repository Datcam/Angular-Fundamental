import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
      This page not found in this application!
      <a routerLink="/">Go to home!</a>
    </div>
  `
})

export class NotFoundComponent {}
