import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../../data/payment.model';
@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  @Input() payment: Payment;
  constructor() {}

  ngOnInit(): void {}
}
