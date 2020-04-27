import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((module) => module.AccountModule),
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./modules/booking/booking.module').then((module) => module.BookingModule),
  },
  {
    path: 'lodging',
    loadChildren: () =>
      import('./modules/lodging/lodging.module').then((module) => module.LodgingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
