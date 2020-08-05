import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingHomeComponent } from './lodging-home/lodging-home.component';
import { RentalComponent } from './rental/rental.component';

const routes: Routes = [
  { component: LodgingComponent, path: '' }, 
  {component: LodgingHomeComponent, path: 'home'},
  {component: RentalComponent, path: 'rental'}
];

@NgModule({
  declarations: [LodgingComponent],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule {}
