import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountEditingService } from './account/services/accountediting.service';

@NgModule({
  imports: [AccountRoutingModule, FormsModule, FormsModule, ReactiveFormsModule],
  providers: [AccountEditingService],
})
export class AccountModule {}
