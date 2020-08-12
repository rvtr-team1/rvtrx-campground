import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FeaturedLodgingComponent } from './featured-lodging/featured-lodging.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [{ component: BookingComponent, path: '' }];

@NgModule({
  declarations: [
    BookingComponent,
    SearchBarComponent,
    SpotlightComponent,
    SearchResultsComponent,
    FeaturedLodgingComponent,
  ],
  exports: [RouterModule],
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
