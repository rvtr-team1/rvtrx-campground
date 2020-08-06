import { NgModule } from '@angular/core';
import { BookingRoutingModule } from './booking-routing.module';
import { FeaturedLodgingComponent } from './featured-lodging/featured-lodging.component';

@NgModule({
  declarations: [FeaturedLodgingComponent],
  imports: [BookingRoutingModule],
})
export class BookingModule {}
