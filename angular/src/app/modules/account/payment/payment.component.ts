import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
/**
 * Class representing a user's payment information
 */
export class PaymentComponent {
  @Input() payments: Payment[];
  @Output() paymentsEdited = new EventEmitter();

  /**
   * Adds a new set of payment information
   * @param newCard Payment
   */
  addCard(newCard: Payment) {
    this.payments.push(newCard);
    console.log(newCard);
  }
}
