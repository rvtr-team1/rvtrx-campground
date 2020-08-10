import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Payment } from '../../../data/payment.model';
import { EditingService } from '../services/abstract.editing.service';
import { AccountEditingService } from '../services/account.editing.service';

@Component({
  selector: 'uic-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  @Input() payments: Payment[];
  @Output() paymentsEdited = new EventEmitter();

  constructor(private editingService: AccountEditingService) {}

  ngOnInit(): void {
    this.editingService.register({ payments: this.payments });
  }

  addCard(newCard: Payment) {
    this.payments.push(newCard);
    console.log(JSON.stringify(newCard));
  }
}
