import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountBookingComponent } from './account-booking/account-booking.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountReviewComponent } from './account-review/account-review.component';
import { EditableComponent } from './editable/editable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericEditingService } from '../../services/editable/generic-editing.service';
import { EditedAccount } from '../../data/edited-account.type';

const routes: Routes = [{ component: AccountComponent, path: '' }];

@NgModule({
  declarations: [
    AccountComponent,
    AccountBookingComponent,
    AddressComponent,
    PaymentComponent,
    ProfileComponent,
    AccountReviewComponent,
    EditableComponent,
  ],
  providers: [
    {
      provide: GenericEditingService,
      useFactory: () => new GenericEditingService<EditedAccount>(),
    },
  ],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AccountRoutingModule {}
