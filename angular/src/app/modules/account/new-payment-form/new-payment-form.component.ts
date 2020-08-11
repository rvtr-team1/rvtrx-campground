import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-new-payment-form',
  templateUrl: './new-payment-form.component.html',
  styleUrls: ['./new-payment-form.component.scss'],
})
export class NewPaymentFormComponent implements OnInit {
  showModal = false;

  @Output() newPayment: EventEmitter<Payment> = new EventEmitter<Payment>();

  PaymentForm = new FormGroup({
    CCNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/\d{4}-?\d{4}-?\d{4}-?\d{4}$/),
    ]),
    ExpDate: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern(/^(0[1-9]|1[0-2])\/?(2[0-9])$/),
    ]),
    SecurityNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^([0-9]{3})$/),
    ]),
  });

  get Bank() {
    return '1';
  }
  get CCNumber() {
    return this.PaymentForm.get('CCNumber') as FormControl;
  }
  get ExpDate() {
    return this.PaymentForm.get('ExpDate') as FormControl;
  }
  get SecurityNumber() {
    return this.PaymentForm.get('SecurityNumber') as FormControl;
  }
  constructor() {}

  onSubmit() {
    this.showModal = !this.showModal;
    const payload = {
      cardExpirationDate: new Date(this.PaymentForm.value.ExpDate),
      cardName: '',
      cardNumber: this.PaymentForm.value.CCNumber,
      id: '',
    } as Payment;
    this.newPayment.emit(payload);
  }

  ngOnInit(): void {}
}
