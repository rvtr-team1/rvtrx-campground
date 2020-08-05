import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingComponent } from './booking/booking.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [{ component: BookingComponent, path: '' }];

@NgModule({
  declarations: [BookingComponent, SearchResultsComponent],
  exports: [RouterModule],
  imports: [FormsModule,CommonModule,RouterModule.forChild(routes)],
})
export class BookingRoutingModule {}
