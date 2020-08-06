import { Component, OnInit } from '@angular/core';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { BookingService } from 'src/app/services/booking/booking.service';
import {Booking} from '../../../data/booking.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

  bookings$: Observable<Booking[]>;


  constructor(private readonly lodgingService: LodgingService, private readonly bookingService: BookingService) {}

  ngOnInit(): void {




  }
}
