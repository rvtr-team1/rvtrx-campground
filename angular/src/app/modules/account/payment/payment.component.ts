import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent {
  @Input() payment: Payment;
}
