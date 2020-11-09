import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { ChildComponent } from './child/child.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { FileComponent } from './file/file.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ViewContainerRefComponent,
    ChildComponent,
    FileComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true}),
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

