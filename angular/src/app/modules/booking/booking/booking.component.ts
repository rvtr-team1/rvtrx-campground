import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/data/booking.model';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {
  bookings$: Observable<Booking[]>;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookings$ = this.bookingService.get();
  }
}
