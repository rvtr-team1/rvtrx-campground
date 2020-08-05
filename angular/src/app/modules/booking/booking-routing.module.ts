import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { component: BookingComponent, path: '' },
  { component: SearchResultsComponent, path: 'search-results' }];


@NgModule({
  declarations: [BookingComponent,SearchResultsComponent],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BookingRoutingModule {}
