import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingDetailsComponent } from './lodging-details/lodging-details.component';
import { LodgingHomeComponent } from './lodging-home/lodging-home.component';

const routes: Routes = [
  { component: LodgingHomeComponent, path: '' },
  { component: LodgingDetailsComponent, path: 'details/:id' },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule {}
