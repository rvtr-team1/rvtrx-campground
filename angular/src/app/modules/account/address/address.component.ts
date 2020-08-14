import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Address } from '../../../data/address.model';
import { Account } from '../../../data/account.model';
import { GenericEditingService } from '../../../services/editable/generic-editing.service';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
/**
 * Class representing a user's address
 */
export class AddressComponent implements OnInit {
  constructor(
    @Inject('EditingService')
    private readonly editingService: GenericEditingService<Partial<Account>>
  ) {}
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();
  editMode = false;
  titleEdit = 'Click To Edit Your Address';

  ngOnInit(): void {}

  /**
   * Updates the _Editing Service_ with the new address information
   */
  edited() {
    this.editingService.update({ address: this.address });
  }
}
