import { Injectable } from '@angular/core';
import { EditingService } from './abstract.editing.service';
import { TypeGuard } from './account.typeguard';
@Injectable()
export class AccountEditingService extends EditingService<Account> {
  constructor() {
    super(TypeGuard);
  }
}
