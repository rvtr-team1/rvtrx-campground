import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LodgingRoutingModule } from './lodging-routing.module';
import { RentalComponent } from './rental/rental.component';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingDetailsComponent } from './lodging-details/lodging-details.component';

@NgModule({
  declarations: [LodgingComponent, LodgingDetailsComponent, RentalComponent],
  imports: [CommonModule, LodgingRoutingModule],
})
export class LodgingModule {}
