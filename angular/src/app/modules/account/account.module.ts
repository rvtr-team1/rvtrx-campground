import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountEditingService } from './services/account.editing.service';

@NgModule({
  imports: [AccountRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AccountEditingService],
})
export class AccountModule {}
