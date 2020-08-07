import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { Rental } from '../../../data/rental.model';
import { Booking } from '../../../data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';
import { LodgingService } from 'src/app/services/lodging/lodging.service';
import { Lodging } from 'src/app/data/lodging.model';
import { map } from 'rxjs/operators';
import { Location } from '../../../data/location.model';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
})
export class BookingComponent implements OnInit {

  rentals$: Observable<Rental[]>;
  bookings$: Observable<Booking[]>;
  lodgings$: Observable<Lodging[]>;
  locations$: Observable<Location[]>;

  searchResults: Lodging[] = [];
  isSearched: Boolean = false;

  constructor(
    private bookingService: BookingService,
    private lodgingService: LodgingService
  ) {}

    
  

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value );
    // this.searchByCity(form.value.location);

    let occupancy = form.value.adults + form.value.children;
    // this.searchByOccupancy(occupancy);

    // this.searchByCityAndOccupancy(form.value.location, occupancy);

    let checkIn = form.value["check-in"]
    let checkOut = form.value["check-out"]
    

    this.searchByDate(checkIn, checkOut);
    this.isSearched = true;
  }
  
  searchByCity(searchLocation: string) {
    console.log(searchLocation);
    this.lodgings$.subscribe(
      lodgings => lodgings.forEach(
        lodging => {
          if(lodging.location.address.city == searchLocation) {
            this.searchResults.push(lodging);
            console.log(this.searchResults);
          };

        }
      )
    ) 
  }

  searchByOccupancy(personCount: number) {
    console.log(personCount);
    this.lodgings$.subscribe(
      lodgings => lodgings.forEach(
        lodging => {
          lodging.rentals.forEach(
            rental => {
              if(rental.rentalUnit.occupancy >= personCount) {
                this.searchResults.push(lodging);
                console.log(this.searchResults);
              }
            }
          )
        }
      )
    )
  }

  searchByDate(checkIn: Date, checkOut: Date) {
    console.log(checkIn, checkOut);
    this.lodgings$ = this.lodgingService.get();
    this.searchResults = [];

    let lodgingRentals = [];
    let bookingRentals = [];
    let availableRentals = [];

    this.bookings$.subscribe(
      bookings => bookings.forEach(
        booking => booking.rentals.forEach(
          bookingRental => {
            bookingRentals.push(bookingRental);
          }
        )
      )
    )
    
    console.log(bookingRentals);

    this.lodgings$.subscribe(
      lodgings => lodgings.forEach(
        lodging => lodging.rentals.forEach(
          lodgingRental => {
            lodgingRentals.push(lodgingRental);
          }
        )
      )
    )
    
    console.log(lodgingRentals);
          debugger;
    this.bookings$.subscribe(
      bookings => bookings.forEach(
        booking => {
          console.log(booking);
          if (checkIn < booking.stay.checkIn && checkOut < booking.stay.checkIn) {
            lodgingRentals.forEach(
              lodgingRental => {
                if (booking.rentals.includes(lodgingRental)) {
                  console.log(`lodging rental ${lodgingRental.name} is available`)
                }
              }
            )
          }
          else if (checkIn > booking.stay.checkOut && checkOut > booking.stay.checkOut ) {
            lodgingRentals.forEach(
              lodgingRental => {
                if (booking.rentals.includes(lodgingRental)) {
                  console.log(`lodging rental ${lodgingRental.name} is available`)
                }
              }
            )
          }
        }
      )
    )
    

    console.log(availableRentals);
    
    this.lodgings$.subscribe(
      lodgings => lodgings.forEach(
        lodging => {
           availableRentals.forEach(
             availableRental => {
               if (lodging.rentals.includes(availableRental)) {
                 this.searchResults.push(lodging);
               }
             }
           )
        }
      )
    )

    

    console.log(this.searchResults);
    this.lodgings$ = of(this.searchResults);

  }
  
  searchByCityAndOccupancy(city: string, occupancy: number){
    console.log(city, occupancy);
    this.lodgings$ = this.lodgingService.get();
    this.searchResults = []; 
    this.lodgings$.subscribe(
      lodgings => lodgings.forEach(
        lodging => {
          lodging.rentals.forEach(
            rental => {
              if(rental.rentalUnit.occupancy >= occupancy && lodging.location.address.city == city ) {
                if (!this.searchResults.includes(lodging)) {
                  this.searchResults.push(lodging);
                }
              }
            }
          )
        }
      )
    )

    console.log(this.searchResults);
    this.lodgings$ = of(this.searchResults);
  }


  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();
    this.bookings$ = this.bookingService.get();

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

    this.lodgings$.subscribe (
      lodgings => this.locations$ = of(lodgings.map(lodging => lodging.location))
    );
  }
}
