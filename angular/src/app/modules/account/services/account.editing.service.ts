import { Injectable } from '@angular/core';
import { EditingService } from './abstract.editing.service';
import { typeGuard } from './account.typeguard';
import { IAccount } from './account.type';
@Injectable()
export class AccountEditingService extends EditingService<IAccount> {
  constructor() {
    super(typeGuard);
  }
}
