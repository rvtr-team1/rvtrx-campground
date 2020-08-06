import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [{ component: BookingComponent, path: '' }];

@NgModule({
  declarations: [
    BookingComponent,
    SpotlightComponent
  ],
  exports: [CommonModule, RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
