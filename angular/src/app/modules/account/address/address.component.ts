import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Address } from '../../../data/address.model';
import { Account } from '../../../data/account.model';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';
import { ACCOUNT_EDITING_SERVICE } from '../account-editing.token';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
/**
 * Class representing a user's address
 */
export class AddressComponent {
  @Input() address!: Address;
  @Output() addressEdited = new EventEmitter();

  editMode = false;
  titleEdit = 'Click To Edit Your Address';

  constructor(
    @Inject(ACCOUNT_EDITING_SERVICE)
    private readonly editingService: GenericEditingService<Partial<Account>>
  ) {}

  /**
   * Updates the _Editing Service_ with the new address information
   */
  edited(): void {
    this.editingService.update({ address: this.address });
  }
}
