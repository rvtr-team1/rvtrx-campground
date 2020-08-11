import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-new-payment-form',
  templateUrl: './new-payment-form.component.html',
  styleUrls: ['./new-payment-form.component.scss'],
})
export class NewPaymentFormComponent implements OnInit {
  /**
   * @param {boolean} showModal - indicates whether the modal is showing or hidden
   */
  showModal = false;
  /**
   * @event newPayment -emits a new payment from user input when triggered
   */
  @Output() newPayment: EventEmitter<Payment> = new EventEmitter<Payment>();
  /**
   * The FormGroup represents the data collected from the user to add a payment
   * @param {FormControl} ccNumber - The number for the Credit Card w/ validators
   */
  paymentForm = new FormGroup({
    ccNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/\d{4}-?\d{4}-?\d{4}-?\d{4}$/),
    ]),
    /**
     * @param {FormControl} expDate - The Expiration date for the Credit Card w/validators
     */
    expDate: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern(/^(0[1-9]|1[0-2])\/?(2[0-9])$/),
    ]),
    /**
     * @param {FormControl} securityNumber - The CVV for the added Credit Card w/ validators
     */
    securityNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^([0-9]{3})$/),
    ]),
  });

  /**
   * These getters retrieve the form controls to be used in the template and casts them as a Form control to prevent typechecking errors
   */

  get Bank() {
    return '1';
  }
  /**
   * @function get - retrieves CCNumber Form Control
   */
  get ccNumber() {
    return this.paymentForm.get('ccNumber') as FormControl;
  }
  /**
   * @function get - retrieves ExpDate Form Control
   */
  get expDate() {
    return this.paymentForm.get('expDate') as FormControl;
  }
  /**
   * @function get - retrieves the SecurityNumer Form Control
   */
  get securityNumber() {
    return this.paymentForm.get('securityNumber') as FormControl;
  }
  constructor() {}
  /**
   * Submit event
   *
   *@property {boolean} showModal - indicates whether the modal is showing or hidden
   *@fires onSubmit - Trigged by ngSubmit. Takes the values from the form control and maps them to a payment which is emitted & toggles modal display.
   *@type {Payment}
   */
  onSubmit() {
    this.showModal = !this.showModal;
    const payload = {
      cardExpirationDate: new Date(this.paymentForm.value.expDate),
      cardName: '',
      cardNumber: this.paymentForm.value.ccNumber,
      id: '',
    } as Payment;
    this.newPayment.emit(payload);
  }

  ngOnInit(): void {}
}
