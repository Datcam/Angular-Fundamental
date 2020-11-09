import { Component } from '@angular/core';

interface IRoutes {
  name: string;
  route: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <nav class="nav">
      <a
        *ngFor="let item of routes"
        [routerLink]="item.route"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{exact: item.exact}"
      >{{item.name}}</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  routes: IRoutes[] = [
    {
      name: 'Home page',
      route: '/',
      exact: true
    },
    {
      name: 'Passenger',
      route: '/passengers',
      exact: true
    },
    {
      name: '404 Pge',
      route: '/oops',
      exact: false
    },
  ];
}
