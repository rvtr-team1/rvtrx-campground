import { Component, OnInit, Input } from '@angular/core';
import { Payment } from 'src/app/data/payment.model';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  @Input() payment: Payment;

  constructor() {}

  ngOnInit(): void {}
}
