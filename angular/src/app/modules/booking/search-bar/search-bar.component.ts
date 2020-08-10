import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { Location } from '../../../data/location.model';

import { map } from 'rxjs/operators';

import { Rental } from '../../../data/rental.model';
import { Booking } from '../../../data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Lodging } from '../../../data/lodging.model';
import { LodgingService } from '../../../services/lodging/lodging.service';

@Component({
  selector: 'uic-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  rentals$: Observable<Rental[]>;
  bookings$: Observable<Booking[]>;
  lodgings$: Observable<Lodging[]>;
  locations$: Observable<Location[]>;

  availableRentals: Rental[] = [];
  bookingRentals: Rental[] = [];
  lodgingRentals: Rental[] = [];

  searchResults: Lodging[] = [];

  constructor(private bookingService: BookingService, private lodgingService: LodgingService) {}

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);

    let occupancy = form.value.adults + form.value.children;

    let city = form.value.location;
    let checkIn = form.value['check-in'];
    let checkOut = form.value['check-out'];

    this.searchByAll(city, checkIn, checkOut, occupancy);
  }

  searchByAll(city: string, occupancy: number, checkIn: Date, checkOut: Date): void {
    this.lodgings$ = this.lodgingService.get();
    this.searchResults = [];

    this.lodgingRentals = [];
    this.bookingRentals = [];

    this.getBookingRentals();
    this.getLodgingRentals();

    this.getAvailableRentals(checkIn, checkOut);

    console.log(this.lodgingRentals);
    console.log(this.bookingRentals);
    console.log(this.availableRentals);

    // This is the same as search by city and occupancy function down below, however this chcecks available rentals against the
    // lodging rentals so if the ids match, we can add the lodging to the search results
    this.lodgings$.subscribe((lodgings) =>
      lodgings.forEach((lodging) =>
        lodging.rentals.forEach((lodgingRental) => {
          this.availableRentals.forEach((availableRental) => {
            if (lodgingRental.id === availableRental.id) {
              console.log(lodgingRental);
              if (
                lodging.location.address.city == city &&
                availableRental.rentalUnit.occupancy >= occupancy
              ) {
                if (!this.searchResults.includes(lodging)) {
                  this.searchResults.push(lodging);
                  console.log(this.searchResults);
                }
              }
            }
          });
        })
      )
    );

    console.log(this.searchResults);
    this.lodgings$ = of(this.searchResults);
  }

  getBookingRentals(): void {
    this.bookings$.subscribe((bookings) =>
      bookings.forEach((booking) =>
        booking.rentals.forEach((bookingRental) => {
          this.bookingRentals.push(bookingRental);
        })
      )
    );
  }

  getLodgingRentals(): void {
    this.lodgings$.subscribe((lodgings) =>
      lodgings.forEach((lodging) =>
        lodging.rentals.forEach((lodgingRental) => {
          this.lodgingRentals.push(lodgingRental);
        })
      )
    );
  }

  getAvailableRentals(checkIn: Date, checkOut: Date): void {
    this.bookings$.subscribe((bookings) =>
      bookings.forEach((booking) => {
        if (checkIn < booking.stay.checkIn && checkOut < booking.stay.checkIn) {
          this.lodgingRentals.forEach((lodgingRental) => {
            if (booking.rentals.includes(lodgingRental)) {
              console.log(`lodging rental ${lodgingRental.name} is available`);
              this.availableRentals.push(lodgingRental);
            } else if (!booking.rentals.includes(lodgingRental)) {
              console.log(`lodging rental ${lodgingRental.name} is available`);
              this.availableRentals.push(lodgingRental);
            }
          });
        } else if (checkIn > booking.stay.checkOut && checkOut > booking.stay.checkOut) {
          this.lodgingRentals.forEach((lodgingRental) => {
            if (booking.rentals.includes(lodgingRental)) {
              console.log(`lodging rental ${lodgingRental.name} is available`);
              this.availableRentals.push(lodgingRental);
            }
          });
        }
      })
    );
  }

  searchByCityAndOccupancy(city: string, occupancy: number) {
    console.log(city, occupancy);
    this.lodgings$ = this.lodgingService.get();
    this.searchResults = [];
    this.lodgings$.subscribe((lodgings) =>
      lodgings.forEach((lodging) => {
        lodging.rentals.forEach((rental) => {
          if (rental.rentalUnit.occupancy >= occupancy && lodging.location.address.city == city) {
            if (!this.searchResults.includes(lodging)) {
              this.searchResults.push(lodging);
            }
          }
        });
      })
    );

    this.lodgings$ = of(this.searchResults);
  }

  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();
    this.bookings$ = this.bookingService.get();

    this.lodgings$.subscribe(
      (lodgings) => (this.locations$ = of(lodgings.map((lodging) => lodging.location)))
    );
  }
}
