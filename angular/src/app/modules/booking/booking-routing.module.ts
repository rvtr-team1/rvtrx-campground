import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { LodgingDetailsComponent } from '../lodging/lodging-details/lodging-details.component';

const routes: Routes = [
  { component: BookingComponent, path: '' },
  { component: LodgingDetailsComponent, path: 'featured-lodging/details/:id' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
