import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { SearchComponent } from './search/search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [SearchComponent, SearchResultsComponent],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
