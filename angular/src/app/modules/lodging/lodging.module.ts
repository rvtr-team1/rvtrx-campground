import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LodgingRoutingModule } from './lodging-routing.module';
import { LodgingHomeComponent } from './lodging-home/lodging-home.component';

@NgModule({
  declarations: [LodgingHomeComponent],
  imports: [CommonModule, LodgingRoutingModule],
})
export class LodgingModule {}
