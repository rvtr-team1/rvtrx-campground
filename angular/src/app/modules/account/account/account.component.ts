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
  }
}
