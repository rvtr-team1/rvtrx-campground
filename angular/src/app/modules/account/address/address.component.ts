import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../data/address.model';
import { AccountEditingService } from '../services/account.editing.service';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
/**
 * Class representing a user's address
 */
export class AddressComponent implements OnInit {
  constructor(private readonly editingService: AccountEditingService) {}
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();
  editMode = false;
  titleEdit = 'Click To Edit Your Address';

  ngOnInit(): void {
    this.editingService.register({ address: this.address });
  }

  /**
   * Updates the _Editing Service_ with the new address information
   */
  edited() {
    this.editingService.update({ address: this.address });
  }
}
