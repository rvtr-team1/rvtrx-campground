import { GenericEditingService } from '../../services/editable/generic-editing.service';
import { InjectionToken } from '@angular/core';

export const ACCOUNT_EDITING_SERVICE = new InjectionToken<GenericEditingService<Partial<Account>>>(
  'AccountEditingService'
);
