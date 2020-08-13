import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountEditingService } from './services/account.editing.service';

@NgModule({
  imports: [AccountRoutingModule],
  providers: [AccountEditingService],
})
export class AccountModule {}
