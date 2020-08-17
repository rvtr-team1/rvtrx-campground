import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../data/address.model';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  @Input() address: Address;
  @Output() addressEdited = new EventEmitter();

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {}

  /* addAddress(newAddress: Address) {
    this.accountService.postAddress(newAddress).subscribe((e) => {
      console.log(e);
    });
  } */
}
