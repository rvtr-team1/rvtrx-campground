import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../../../data/address.model';

@Component({
  selector: 'uic-newaddressform',
  templateUrl: './newaddressform.component.html',
  styleUrls: ['./newaddressform.component.scss'],
})
export class NewaddressformComponent implements OnInit {
  showModal = false;

  @Output() newAddress: EventEmitter<Address> = new EventEmitter<Address>();
  AddressForm = new FormGroup({
    City: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/),
    ]),
    Country: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/),
    ]),
    PostalCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^([0-9]{5})([\-]{1}[0-9]{4})?$/),
    ]),
    StateProvince: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/),
    ]),
    Street: new FormControl('', [
      Validators.required,
      Validators.pattern(/\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}/),
    ]),
  });

  get City() {
    return this.AddressForm.get('City') as FormControl;
  }
  get Country() {
    return this.AddressForm.get('Country') as FormControl;
  }
  get PostalCode() {
    return this.AddressForm.get('PostalCode') as FormControl;
  }
  get StateProvince() {
    return this.AddressForm.get('StateProvince') as FormControl;
  }
  get Street() {
    return this.AddressForm.get('Street') as FormControl;
  }

  constructor() {}
  onSubmit() {
    this.showModal = !this.showModal;
    const payload = {
      city: this.AddressForm.value.City,
      country: this.AddressForm.value.Country,
      postalCode: this.AddressForm.value.PostalCode,
      stateProvince: this.AddressForm.value.stateProvince,
      street: this.AddressForm.value.Street,
      id: '',
    } as Address;
    this.newAddress.emit(payload);
    console.warn(this.AddressForm.value);
  }

  ngOnInit(): void {}
}
