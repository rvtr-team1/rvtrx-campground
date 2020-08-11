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
})
export class SearchBarComponent implements OnInit {
  bookings$: Observable<Booking[]>;
  lodgings$: Observable<Lodging[]>;

  @Output() searchResults = new EventEmitter<Lodging[]>();
  @Output() isSearched = new EventEmitter<boolean>();

  constructor(
    private readonly bookingService: BookingService,
    private readonly lodgingService: LodgingService
  ) {}

  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();
    this.bookings$ = this.bookingService.get();
  }

  async onSubmit(form: NgForm) {
    const occupancy = form.value.adults + form.value.children;
    const city = form.value.location;

    const checkIn = form.value['check-in'];
    const checkOut = form.value['check-out'];

    await this.searchByAll(checkIn, checkOut, city, occupancy);
    this.isSearched.emit(true);
  }

  private async getLodgingRentals(): Promise<Rental[]> {
    return this.lodgings$
      .pipe(
        map<Lodging[], Rental[]>((lodgings) => {
          const rentals = lodgings.map((lodging) => lodging.rentals);
          return rentals.reduce((a, b) => a.concat(b));
        })
      )
      .toPromise();
  }

  private async getAvailableRentals(checkIn: Date, checkOut: Date): Promise<Rental[]> {
    const lodgingRentals = await this.getLodgingRentals();

    // Find rentals that don't already exist in
    // bookings within the checkIn - checkOut range
    return this.bookings$
      .pipe(
        map((bookings) => {
          const availableRentals: Rental[] = [];

          for (const booking of bookings) {
            const bookingCheckIn = new Date(booking.stay.checkIn);
            const bookingCheckOut = new Date(booking.stay.checkOut);

            if (
              (checkIn < bookingCheckIn && checkOut < bookingCheckIn) ||
              (checkIn > bookingCheckOut && checkOut > bookingCheckOut)
            ) {
              for (const lodgingRental of lodgingRentals) {
                if (!booking.rentals.includes(lodgingRental)) {
                  availableRentals.push(lodgingRental);
                }
              }
            }
          }

          return availableRentals;
        })
      )
      .toPromise();
  }

  async searchByAll(checkIn: Date, checkOut: Date, city: string, occupancy: number) {
    const availableRentals: Rental[] = await this.getAvailableRentals(checkIn, checkOut);

    function isAvailable(rental: Rental) {
      for (const availableRental of availableRentals) {
        if (rental.id === availableRental.id) {
          return true;
        }
      }
      return false;
    }

    // Most of this should be backend logic eventually,
    // but this works for now
    this.lodgings$.subscribe((lodgings) => {
      const searchResults: Lodging[] = [];

      for (const lodging of lodgings) {
        if (lodging.location.address.city === city) {
          const availableLodgingRentals = lodging.rentals.filter((rental) => isAvailable(rental));

          for (const availableRental of availableLodgingRentals) {
            if (availableRental.rentalUnit.occupancy >= occupancy) {
              searchResults.push(lodging);
              break;
            }
          }
        }
      }

      this.searchResults.emit(searchResults);
    });
  }
}
