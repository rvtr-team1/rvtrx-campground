import { NgModule } from '@angular/core';
import { BookingRoutingModule } from './booking-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [BookingRoutingModule],
  declarations: [SearchBarComponent],
})
export class BookingModule {}
