import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingDetailsComponent } from './lodging-details/lodging-details.component';
import { LodgingComponent } from './lodging/lodging.component';

const routes: Routes = [
  { component: LodgingComponent, path: '' },
  { component: LodgingDetailsComponent, path: 'details/:id' },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule {}
