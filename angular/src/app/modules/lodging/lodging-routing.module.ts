import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  { component: LodgingComponent, path: '' },
  //{component: RentalComponent, path: 'rental'}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule {}
