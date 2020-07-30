import { Component, OnInit, Input } from '@angular/core';
import { Address } from '../../../data/address.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'uic-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  @Input() address$: Observable<Address>;

  constructor() {}

  ngOnInit(): void {}
}
