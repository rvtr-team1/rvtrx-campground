import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../../../data/account.model';
import { AccountService } from '../../../services/account/account.service';
import { Address } from '../../../data/address.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  account$: Observable<Account>;
  address$: Observable<Address>;

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.account$ = of({
      id: '',
      address: {
        id: '',
        city: '',
        country: '',
        postalCode: '',
        stateProvince: '',
        street: '',
      },
      name: '',
      payments: [],
      profiles: [],
    });

    this.address$ = this.account$.pipe(map((acc) => acc.address));
  }
}
