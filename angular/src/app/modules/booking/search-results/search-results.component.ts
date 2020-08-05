import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'uic-search-results',
  templateUrl: './search-results.component.html',
})
export class SearchResultsComponent implements OnInit {
  @Input() bookings: Booking[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.bookings);
  }
}
