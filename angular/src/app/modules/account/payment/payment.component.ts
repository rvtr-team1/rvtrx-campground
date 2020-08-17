import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Payment, PostPayment } from '../../../data/payment.model';
import { AccountService } from 'src/app/services/account/account.service';
import { AccountBookingComponent } from '../account-booking/account-booking.component';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
/**
 * Class representing a user's payment information
 */
export class PaymentComponent {
  @Input() payments: Payment[];
  @Input() accountid: string;
  @Output() paymentsEdited = new EventEmitter();

  /**
   * Represents the _Payment Component_ 'constructor' method
   */
  constructor(private readonly accountService: AccountService) {}

  ngOnInit(): void {}

  /**
   * Adds a new set of payment information
   * @param newCard Payment
   */
  addCard(newCard: PostPayment) {
    newCard.accountId = this.accountid;
    this.accountService.postPayment(newCard).subscribe(
      (e) =>
        this.payments.push({
          id: '',
          cardName: newCard.cardName,
          cardNumber: newCard.cardNumber,
          securityCode: newCard.securityCode,
          cardExpirationDate: newCard.cardExpirationDate,
        }),
      (e) => console.error(e)
    );
    console.log(newCard);
  }
}
