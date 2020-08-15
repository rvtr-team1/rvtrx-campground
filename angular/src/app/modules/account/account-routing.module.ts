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
import { GenericEditingService } from 'src/app/services/editable/generic-editing.service';

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
      provide: ACCOUNT_EDITING_SERVICE,
      useFactory: () => new GenericEditingService<Partial<Account>>(),
    },
  ],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AccountRoutingModule {}
