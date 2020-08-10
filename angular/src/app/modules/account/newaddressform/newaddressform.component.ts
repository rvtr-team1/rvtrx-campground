import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Address } from '../../../data/address.model';

@Component({
  selector: 'uic-newaddressform',
  templateUrl: './newaddressform.component.html',
  template: '',
  styleUrls: ['./newaddressform.component.scss'],
})
export class NewaddressformComponent implements OnInit {
  showModal = false;

  @Output() newAddress: EventEmitter<Address> = new EventEmitter<Address>();
  AddressForm = new FormGroup({
    City: new FormControl(''),
    Country: new FormControl(''),
    PostalCode: new FormControl(''),
    StateProvince: new FormControl(''),
    Street: new FormControl(''),
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
