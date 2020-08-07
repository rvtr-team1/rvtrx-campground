import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../data/address.model';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  constructor() {}
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'address': {
            this.addressEdited.emit();
          }
        }
      }
    }
  }
}
