import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostPayment } from '../../../data/payment.model';

@Component({
  selector: 'uic-new-payment-form',
  templateUrl: './new-payment-form.component.html',
  styleUrls: ['./new-payment-form.component.scss'],
})
export class NewPaymentFormComponent implements OnInit {
  showModal = false;

  @Output() newPayment: EventEmitter<PostPayment> = new EventEmitter<PostPayment>();

  paymentForm = new FormGroup({
    ccNumber: new FormControl('', [
      Validators.required,
      /*   Groups of 4 digits, with optional hiphens between   */
      Validators.pattern(/\d{4}-?\d{4}-?\d{4}-?\d{4}$/),
    ]),

    expDate: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      /*   XX/XX two numbers between 0 and 12, a /, a number greater than 20   */
      Validators.pattern(/^(0[1-9]|1[0-2])\/?(2[0-9])$/),
    ]),

    securityNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      /*  Three digits between 0 and 9   */
      Validators.pattern(/^([0-9]{3})$/),
    ]),
  });

  /**
   * These getters retrieve the form controls to be used in the template and casts them as a Form control to prevent typechecking errors
   */

  get Bank(): string {
    return '1';
  }

  get ccNumber(): FormControl {
    return this.paymentForm.get('ccNumber') as FormControl;
  }

  get expDate(): FormControl {
    return this.paymentForm.get('expDate') as FormControl;
  }

  get securityNumber(): FormControl {
    return this.paymentForm.get('securityNumber') as FormControl;
  }

  constructor() {}

  /**
   * Submit event
   *
   * @fires onSubmit - Trigged by ngSubmit. Formats to payment, Triggers newPayment.
   */
  onSubmit(): void {
    this.showModal = !this.showModal;
    const payload = {
      id: '',
      cardExpirationDate: `${new Date(this.paymentForm.value.expDate)}`,
      cardName: '',
      cardNumber: this.paymentForm.value.ccNumber,
      securityCode: '111',
    } as PostPayment;
    this.newPayment.emit(payload);
  }

  ngOnInit(): void {}
}
