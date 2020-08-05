import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../../data/booking.model';

@Component({
  selector: 'uic-account-booking',
  templateUrl: './account-booking.component.html',
})
export class AccountBookingComponent implements OnInit {
  @Input() booking: Booking;

  constructor() {}

  ngOnInit(): void {}
}
