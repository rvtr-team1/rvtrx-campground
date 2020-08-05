import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [{ component: BookingComponent, path: '' }];

@NgModule({
  declarations: [BookingComponent],
  exports: [RouterModule],
  imports: [CommonModule,RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
