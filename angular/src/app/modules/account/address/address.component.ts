import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../../../data/address.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  @Input() address$: Observable<Address>;
  city$: Observable<string>;
  country$: Observable<string>;
  postalCode$: Observable<string>;
  stateProvince$: Observable<string>;
  street$: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    this.city$ = this.address$.pipe(map((address) => address.city));
    this.country$ = this.address$.pipe(map((address) => address.country));
    this.postalCode$ = this.address$.pipe(map((address) => address.postalCode));
    this.stateProvince$ = this.address$.pipe(map((address) => address.stateProvince));
    this.street$ = this.address$.pipe(map((address) => address.street));
  }
}
