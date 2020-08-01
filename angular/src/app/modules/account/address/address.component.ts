import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../../../data/address.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  @Input() address: Address;

  constructor() {}

  ngOnInit(): void {}
}
