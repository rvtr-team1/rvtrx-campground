import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GenericEditingService } from 'services/editable/generic-editing.service';
import { AccountComponent } from './account/account.component';
import { ACCOUNT_EDITING_SERVICE } from './account-editing.token';

const routes: Routes = [{ component: AccountComponent, path: '' }];

@NgModule({
  providers: [
    {
      provide: ACCOUNT_EDITING_SERVICE,
      useFactory: () => new GenericEditingService<Partial<Account>>(),
    },
  ],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AccountRoutingModule {}
