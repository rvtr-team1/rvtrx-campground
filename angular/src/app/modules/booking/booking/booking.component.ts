import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { Rental } from '../../../data/rental.model';
import { Booking } from '../../../data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {

  rentals$: Observable<Rental[]>;
  locations$: Observable<Location[]>;
  bookings$: Observable<Booking[]>;

  bookings: Booking[];
  

  constructor(
    private bookingService: BookingService,
    private lodgingService: LodgingService
  ) {}

    
  

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value );
  }
  lodgings$: Observable<Lodging[]>;
  


  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();

    this.lodgings$.pipe(
      map((lodgings) => {
        lodgings.map((lodging) => lodging.rentals);
      })
    );

    this.lodgings$.pipe(
      map((lodgings) => {
        lodgings.map((lodging) => lodging.reviews);
      })
    );
  }
}
