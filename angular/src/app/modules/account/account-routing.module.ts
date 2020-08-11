import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountBookingComponent } from './account-booking/account-booking.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountReviewComponent } from './account-review/account-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewAddressformComponent } from './new-address-form/new-address-form.component';
import { NewPaymentFormComponent } from './new-payment-form/new-payment-form.component';

const routes: Routes = [{ component: AccountComponent, path: '' }];

@NgModule({
  declarations: [
    AccountComponent,
    AccountBookingComponent,
    AddressComponent,
    PaymentComponent,
    ProfileComponent,
    AccountReviewComponent,
    NewAddressformComponent,
    NewPaymentFormComponent,
  ],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AccountRoutingModule {}
