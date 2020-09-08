import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AccountRoutingModule } from 'modules/account/account-routing.module';
=======
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';
import { AccountBookingComponent } from './account-booking/account-booking.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountReviewComponent } from './account-review/account-review.component';
import { NewAddressFormComponent } from './new-address-form/new-address-form.component';
import { NewPaymentFormComponent } from './new-payment-form/new-payment-form.component';
import { EditableComponent } from './editable/editable.component';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> updated account module w/declarations dict, form and common modules

@NgModule({
  declarations: [
    AccountComponent,
    AccountBookingComponent,
    AddressComponent,
    PaymentComponent,
    ProfileComponent,
    AccountReviewComponent,
    NewAddressFormComponent,
    NewPaymentFormComponent,
    EditableComponent,
  ],
  imports: [CommonModule, AccountRoutingModule, ReactiveFormsModule],
})
export class AccountModule {}
