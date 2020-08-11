import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Rental } from '../../../data/rental.model';
import { Booking } from '../../../data/booking.model';
import { BookingService } from 'src/app/services/booking/booking.service';
import { Lodging } from '../../../data/lodging.model';
import { LodgingService } from '../../../services/lodging/lodging.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'uic-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  lodgings$: Observable<Lodging[]>;

  @Output() searchResults = new EventEmitter<Lodging[]>();
  @Output() isSearched = new EventEmitter<boolean>();

  constructor(private bookingService: BookingService, private lodgingService: LodgingService) {}

  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();
    this.bookings$ = this.bookingService.get();
  }

  async onSubmit(form: NgForm) {
    let occupancy = form.value.adults + form.value.children;
    let city = form.value.location;

    let checkIn = form.value['check-in'];
    let checkOut = form.value['check-out'];

    await this.searchByAll(checkIn, checkOut, city, occupancy);
    this.isSearched.emit(true);
  }

  private async getLodgingRentals(): Promise<Rental[]> {
    return this.lodgings$
      .pipe(
        map<Lodging[], Rental[]>((lodgings) => {
          let rentals = lodgings.map((lodging) => lodging.rentals);
          return rentals.reduce((a, b) => a.concat(b));
        })
      )
      .toPromise();
  }

  private async getAvailableRentals(checkIn: Date, checkOut: Date): Promise<Rental[]> {
    let lodgingRentals = await this.getLodgingRentals();

    return this.bookings$
      .pipe(
        map((bookings) => {
          let availableRentals: Rental[] = [];

          bookings.forEach((booking) => {
            if (checkIn < booking.stay.checkIn && checkOut < booking.stay.checkIn) {
              lodgingRentals.forEach((lodgingRental) => {
                if (!booking.rentals.includes(lodgingRental)) {
                  availableRentals.push(lodgingRental);
                }
              });
            } else if (checkIn > booking.stay.checkOut && checkOut > booking.stay.checkOut) {
              lodgingRentals.forEach((lodgingRental) => {
                if (!booking.rentals.includes(lodgingRental)) {
                  availableRentals.push(lodgingRental);
                }
              });
            }
          });

          return availableRentals;
        })
      )
      .toPromise();
  }

  async searchByAll(checkIn: Date, checkOut: Date, city: string, occupancy: number) {
    var availableRentals: Rental[] = await this.getAvailableRentals(checkIn, checkOut);

    function isAvailable(rental: Rental) {
      for (let availableRental of availableRentals) {
        if (rental.id === availableRental.id) {
          return true;
        }
      }
      return false;
    }

    // Most of this should be backend logic eventually,
    // but this works for now
    this.lodgings$.subscribe((lodgings) => {
      let searchResults: Lodging[] = [];

      lodgings.forEach((lodging) => {
        if (lodging.location.address.city === city) {
          let availableLodgingRentals = lodging.rentals.filter((rental) => isAvailable(rental));

          availableLodgingRentals.forEach((availableRental) => {
            if (availableRental.rentalUnit.occupancy >= occupancy) {
              searchResults.push(lodging);
              return false;
            }
            return true;
          });
        }
      });

      this.searchResults.emit(searchResults);
    });
  }
}
