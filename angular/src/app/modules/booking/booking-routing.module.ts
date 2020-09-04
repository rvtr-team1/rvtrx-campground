import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [{ component: BookingComponent, path: '' }];

@NgModule({
  exports: [RouterModule],
  imports: [FormsModule, RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
