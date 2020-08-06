import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Address } from '../../../data/address.model';
import { AccountService } from 'src/app/services/account/account.service';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  constructor() {}
  @Input() address: Address;
  private readonly accountService: AccountService;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'address': {
            this.updateProfile(change.currentValue);
          }
        }
      }
    }
  }

  public updateProfile(address: Address): void {
    //update.updateAccountAddress(address);
  }
}
