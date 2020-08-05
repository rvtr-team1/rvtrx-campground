import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Rental } from '../../../data/rental.model';
import { Booking } from '../../../data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html'
})
export class BookingComponent implements OnInit {

  rentals$: Observable<Rental[]>;
  locations$: Observable<Location[]>;
  // bookings$: Observable<Booking[]>;

  bookings: Booking[] = [
    {
      "id": "1",
      "accountId": "100",
      "lodgingId": "1",
      "guests": [
        {
          "id": "100",
          "email": "campero@demo.com",
          "name": {
            "id": "100",
            "family": "demo",
            "given": "campero"
          },
          "phone": "800-123-9876"
        },
        {
          "id": "200",
          "email": "campera@demo.com",
          "name": {
            "id": "200",
            "family": "demo",
            "given": "campera"
          },
          "phone": "800-123-9876"
        }
      ],
      "rentals": [
        {
          "id": "1",
          "name": "Unit A",
          "rentalUnit": {
            "id": "1",
            "bathrooms": [
              {
                "id": "1",
                "fixture": 1
              },
              {
                "id": "2",
                "fixture": 2
              }
            ],
            "bedrooms": [
              {
                "id": "1",
                "count": 2,
                "type": "Queen"
              },
              {
                "id": "2",
                "count": 2,
                "type": "Queen"
              }
            ],
            "name": "Unit A",
            "occupancy": 4,
            "type": ""
          }
        }
      ],
      "stay": {
        "id": "1",
        "checkIn": new Date ('2019-01-16'),
        "checkOut": new Date ("2019-01-17"),
        "dateCreated": new Date ("2019-01-01"),
        "dateModified": new Date ("2019-01-06")
      },
      "status": "Paid"
    }
  ]
  

  constructor(
    private bookingService: BookingService,
    private lodgingService: LodgingService
  ) {}

  ngOnInit(): void {
    this.bookingService.get().subscribe(
      data => this.bookings = data);
  }
    
  

  // getBookings() {
    
  // }
}
