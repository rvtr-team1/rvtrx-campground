import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../data/address.model';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addAddress(newAddress: Address) {
    console.log(newAddress);
  }
}
