import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { component: BookingComponent, path: '' }];


@NgModule({
  declarations: [
    BookingComponent,
    SpotlightComponent,
    SearchResultsComponent
  ],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
