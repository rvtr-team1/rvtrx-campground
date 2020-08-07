import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  @Input() payments: Payment[];
  @Output() paymentsEdited = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addCard(newCard: Payment) {
    this.payments.push(newCard);
    console.log(JSON.stringify(newCard));
  }
}
