import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from '../../../data/account.model';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'uic-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  account$: Observable<Account>;

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.account$ = of({
      id: '',
      address: {
        id: '1',
        city: 'dallas',
        country: 'us',
        postalCode: '75200',
        stateProvince: 'tx',
        street: '5 elm st',
      },
      name: '',
      payments: [
        {
          cardName: 'amex',
          cardNumber: '****1234',
          cardExpirationDate: new Date(2020, 12),
          id: '1',
        },
        {
          cardName: 'amex',
          cardNumber: '****9876',
          cardExpirationDate: new Date(2020, 12),
          id: '2',
        },
      ],
      profiles: [],
    });
  }
}
