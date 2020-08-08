import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LodgingRoutingModule } from './lodging-routing.module';
import { RentalComponent } from './rental/rental.component';
import { LodgingDetailsComponent } from './lodging-details/lodging-details.component';
import { LodgingHomeComponent } from './lodging-home/lodging-home.component';

@NgModule({
  declarations: [LodgingDetailsComponent, RentalComponent, LodgingHomeComponent],
  imports: [CommonModule, LodgingRoutingModule],
})
export class LodgingModule {}
