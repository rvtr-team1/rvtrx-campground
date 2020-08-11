import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Payment } from '../../../data/payment.model';

@Component({
  selector: 'uic-newpaymentform',
  templateUrl: './newpaymentform.component.html',
  styleUrls: ['./newpaymentform.component.scss'],
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
   * @param {FormControl} CCNumber - The number for the Credit Card w/ validators
   */
  PaymentForm = new FormGroup({
    CCNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/\d{4}-?\d{4}-?\d{4}-?\d{4}$/),
    ]),
    /**
     * @param {FormControl} ExpDate - The Expiration date for the Credit Card w/validators
     */
    ExpDate: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern(/^(0[1-9]|1[0-2])\/?(2[0-9])$/),
    ]),
    /**
     * @param {FormControl} SecurityNumber - The CVV for the added Credit Card w/ validators
     */
    SecurityNumber: new FormControl('', [
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
  get CCNumber() {
    return this.PaymentForm.get('CCNumber') as FormControl;
  }
  /**
   * @function get - retrieves ExpDate Form Control
   */
  get ExpDate() {
    return this.PaymentForm.get('ExpDate') as FormControl;
  }
  /**
   * @function get - retrieves the SecurityNumer Form Control
   */
  get SecurityNumber() {
    return this.PaymentForm.get('SecurityNumber') as FormControl;
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
      cardExpirationDate: new Date(this.PaymentForm.value.ExpDate),
      cardName: '',
      cardNumber: this.PaymentForm.value.CCNumber,
      id: '',
    } as Payment;
    this.newPayment.emit(payload);
  }

  ngOnInit(): void {}
}
