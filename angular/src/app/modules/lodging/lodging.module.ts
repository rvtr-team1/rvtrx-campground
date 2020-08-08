import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LodgingRoutingModule } from './lodging-routing.module';
import { RentalComponent } from './rental/rental.component';
import { LodgingDetailsComponent } from './lodging-details/lodging-details.component';
import { LodgingComponent } from './lodging/lodging.component';

@NgModule({
  declarations: [LodgingDetailsComponent, RentalComponent, LodgingComponent],
  imports: [CommonModule, LodgingRoutingModule],
})
export class LodgingModule {}
