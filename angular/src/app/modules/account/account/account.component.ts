import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../../../data/account.model';
import { AccountService } from '../../../services/account/account.service';
import { map } from 'rxjs/operators';
import { Address } from 'src/app/data/address.model';

@Component({
  selector: 'uic-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  account$: Observable<Account>;
  address$: Observable<Address>;

  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.account$ = this.accountService.get('100');
    this.address$ = this.account$.pipe(map((account) => account.address));
  }
}
