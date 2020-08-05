import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { EditableComponent } from './editable/editable.component';

@NgModule({
  imports: [AccountRoutingModule],
  declarations: [EditableComponent],
})
export class AccountModule {}
