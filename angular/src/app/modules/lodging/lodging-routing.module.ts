import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingHomeComponent } from './lodging-home/lodging-home.component';

const routes: Routes = [{ component: LodgingHomeComponent, path: '' }, {component: LodgingComponent, path: 'details/:id'}];

@NgModule({
  declarations: [LodgingComponent],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule {}
