import { Component, Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const change = changes[propName];
        switch (propName) {
          case 'payments': {
            this.paymentsEdited.emit();
          }
        }
      }
    }
  }
}
