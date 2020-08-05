import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LodgingRoutingModule } from './lodging-routing.module';
import { RentalComponent } from './rental/rental.component';


@NgModule({
  declarations: [RentalComponent],
  imports: [
    CommonModule,
    LodgingRoutingModule
  ]
})
export class LodgingModule { }
