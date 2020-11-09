import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardService } from './passenger-dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'passengers',
    children: [
      {
        path: '', component: PassengerDashboardComponent
      },
      {
        path: ':id', component: PassengerViewerComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailsComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  providers: [
    PassengerDashboardService,
  ],
  bootstrap: []
})

export class PassengerDashboardModule {}
