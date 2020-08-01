import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../../../data/account.model';
import { Address } from '../../../data/address.model';
import { Payment } from '../../../data/payment.model';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'uic-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  account$: Observable<Account>;
  address$: Observable<Address>;
  payments$: Observable<Payment[]>;

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.account$ = this.accountService.get('100');
    this.address$ = this.account$.pipe(map((account) => account.address));
    this.payments$ = this.account$.pipe(map((account) => account.payments));
  }
}
