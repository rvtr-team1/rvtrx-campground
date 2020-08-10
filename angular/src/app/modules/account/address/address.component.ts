import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../data/address.model';
import { AccountEditingService } from '../services/account.editing.service';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  constructor(private readonly editingservice: AccountEditingService) {}
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();

  ngOnInit(): void {
    this.editingservice.register({ address: this.address });
  }

  edited() {
    this.editingservice.update({ address: this.address });
  }
}
