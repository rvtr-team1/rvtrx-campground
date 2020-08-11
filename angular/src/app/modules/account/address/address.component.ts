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
  constructor(private readonly editingservice: AccountEditingService) {}
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();

  ngOnInit(): void {
    this.editingservice.register({ address: this.address });
  }

  /**
   * Updates the _Editing Service_ with the new address information
   */
  edited() {
    this.editingservice.update({ address: this.address });
  }
}
