import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Payment } from '../../../data/payment.model';
import { AccountService } from 'src/app/services/account/account.service';
import { AccountComponent } from '../account/account.component';
@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  @Input() payment: Payment[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'payments': {
            this.updateProfile(change.currentValue);
          }
        }
      }
    }
  }

  private readonly accountService: AccountService;

  public updateProfile(payment: Payment[]): void {
    const update = new AccountComponent(this.accountService);
    update.updateAccountPayment(payment);
  }
}
