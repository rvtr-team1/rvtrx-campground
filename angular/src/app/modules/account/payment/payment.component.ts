import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Payment } from '../../../data/payment.model';
import { AccountEditingService } from '../services/account.editing.service';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
/**
 * Class representing a user's payment information
 */
export class PaymentComponent implements OnInit {
  @Input() payments: Payment[];
  @Output() paymentsEdited = new EventEmitter();

  /**
   * Represents the _Payment Component_ 'constructor' method
   * @param editingservice AccountEditingService
   */
  constructor(private readonly editingservice: AccountEditingService) {}

  ngOnInit(): void {
    this.editingservice.register({ payments: this.payments });
  }

  /**
   * Adds a new set of payment information
   * @param newCard Payment
   */
  addCard(newCard: Payment) {
    this.payments.push(newCard);
    console.log(newCard);
  }
}
