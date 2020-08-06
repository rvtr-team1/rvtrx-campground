import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LodgingComponent } from './lodging/lodging.component';
import { LodgingService } from 'src/app/services/lodging/lodging.service';

const routes: Routes = [{ component: LodgingComponent, path: '' }];

@NgModule({
  declarations: [LodgingComponent],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class LodgingRoutingModule {}
