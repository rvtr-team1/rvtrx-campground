import { CommonModule } from '@angular/common';
import { NgModule, forwardRef } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountBookingComponent } from './account-booking/account-booking.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountReviewComponent } from './account-review/account-review.component';
import { EditableComponent } from './editable/editable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ACCOUNT_EDITING_SERVICE } from './account-editing.token';

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
  providers: [{ provide: parent, useExisting: forwardRef(() => ACCOUNT_EDITING_SERVICE) }],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AccountRoutingModule {}
