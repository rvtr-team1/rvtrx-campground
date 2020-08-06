import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [AccountRoutingModule, FormsModule, FormsModule, ReactiveFormsModule],
})
export class AccountModule {}
